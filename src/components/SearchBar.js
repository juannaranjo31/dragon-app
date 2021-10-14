import React from 'react';
import data from '../json/warriors.json';

export const SearchBar = () => {
    const {characters} = data;
    const breeds = [...new Set( characters.map( (ch) => ch.race ) )];

    return (
        <div className="bar">
            <select>
                <option>Any</option>
                {
                    breeds.map( (breed) => <option>{breed}</option>)
                }
            </select>

            <form>
                <input type="text" name="breed" className="breed-search" placeholder="Search by name" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
