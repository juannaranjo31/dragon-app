import React from 'react';
import { useForm } from '../hooks/useForm';
import data from '../json/warriors.json';

export const SearchBar = () => {
    const {characters} = data;
    const breeds = [...new Set( characters.map( (ch) => ch.race ) )];
    const [name, handleInputChange, handleSubmit] = useForm('');
    

    return (
        <div className="bar">
            <select>
                <option key='any'>Any</option>
                {
                    breeds.map( (breed) => <option key={breed}>{breed}</option>)
                }
            </select>

            <form onSubmit={handleSubmit}>
                <input type="text" name="breed" className="breed-search" placeholder="Search by name" autoComplete="off" 
                value={name} onChange={handleInputChange}/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
