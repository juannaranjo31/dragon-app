import React from 'react';
import { useEffect } from 'react';
import data from '../json/warriors.json';
import { WarriorCard } from './WarriorCard';

export const WarriorsGrid = ( {breed = false, name='false', initial=0, final=4}) => {
    const {characters} = data;
    const arr = characters.slice(initial, final);
    
    return (
        <div className="warriors-grid">
            {
                arr.map( (character) => {
                    return (
                        <WarriorCard id={character.id} key={character.id}/>
                    );
                })
            }
        </div>
    )
}
