import React from 'react';
import { SearchBar } from './SearchBar';
import { WarriorsGrid } from './WarriorsGrid';
import data from '../json/warriors.json';
import { usePage } from '../hooks/usePage';
import { useState } from 'react';

export const Radar = () => {
    const {characters} = data;
    const [initial, setInitial] = useState(0);
    const [final, setFinal] = useState(4);


    return (
        <div className="radar">
            <div className="screen">
                <SearchBar />
                <WarriorsGrid initial={initial} final={final}/>
            </div>

            <div className="buttons">
                <button className="prev"
                 onClick={
                    () => {
                        if (initial > 0) {
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
                        if (final < characters.length) {
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
