import React from 'react';
import data from '../json/warriors.json';


export const WarriorView = ({id = 'goku'}) => {

    const {characters} = data;
    const warrior = characters.find( warrior => warrior.id === id);

    

    return (
        <div className="warrior-view">
            <div className="warrior">
                <img src={window.location.origin + `/${warrior.img}`} alt="Warrior"></img>
            </div>

            <div className="info">
                <h2>{warrior.race}</h2>
                <h1>{warrior.name}</h1>
            </div>

            <div className="bio">
                <p>{warrior.bio}</p>
            </div>
        </div>
    )
}
