import React from 'react';
import { WarriorsGrid } from './WarriorsGrid';
import { useState } from 'react';
import { getBreeds } from '../helpers/getBreeds';
import { useForm } from '../hooks/useForm';
import { searchByBreed } from '../helpers/searchByBreed';
import { useCounter } from '../hooks/useCounter';

export const Radar = () => {
    const [initial, setInitial] = useState(0);
    const [final, setFinal] = useState(4);
    const [characters, setCharacters] = useState(searchByBreed('Any'));
    const [name, handleInputChange] = useForm('');
    const [warrior, setWarrior] = useState(name);
    const {counter, increment, reset} = useCounter(1, 1);


    return (
        <div className="radar">
            <div className="screen">
                {/* Search bar */}
                <div className="bar">
                    <select onChange={({ target }) => { setCharacters(searchByBreed(target.value)); reset(); setInitial(0); setFinal(4)}}>
                        <option key='any'>Any</option>
                        {
                            getBreeds().map((breed) => <option key={breed}>{breed}</option>)
                        }
                    </select>

                    <form onSubmit={(e) => {
                        const nw = document.querySelector('form input').value;
                        setWarrior(nw);
                        e.preventDefault();
                    }}>
                        <input type="text" name="breed" className="breed-search" placeholder="Search by name" autoComplete="off"
                            value={name} onChange={handleInputChange} />
                        <button type="submit">Search</button>
                    </form>
                </div>
                {/* SearchBar */}


                <WarriorsGrid name={warrior} grid={characters.slice(initial, final)} />
            </div>

            <div className="buttons">
                <button className="prev"
                    onClick={
                        () => {
                            if (initial >= 4) {
                                setInitial(initial - 4);
                                setFinal(final - 4);
                            }

                        }
                    }
                ></button>

                <img src={window.location.origin + `/assets/capsule.png`} alt="Capsule corp logo"></img>
                <button className="next"
                    onClick={
                        () => {
                            increment();
                            console.log(counter);
                            
                                if (counter < characters.length / 4) {
                                    setInitial(initial + 4);
                                    setFinal(final + 4);
                                }
                        }
                    }
                ></button>
            </div>

        </div>
    )
}
