import React from 'react';
import { SearchBar } from './SearchBar';

export const Radar = () => {
    return (
        <div className="radar">
            <div className="screen">
                <SearchBar />
            </div>

            <div className="buttons">
                <button className="prev"></button>
                <img src={window.location.origin + `/assets/capsule.png`} alt="Capsule corp logo"></img>
                <button className="next"></button>
            </div>

        </div>
    )
}
