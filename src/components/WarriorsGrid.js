import React from 'react';
import { WarriorCard } from './WarriorCard';
import { searchByName } from '../helpers/searchByName';

export const WarriorsGrid = ( {name='', grid=[], idView, handleClick}) => {

    if (name !== '') {
        grid = [searchByName(name)];

        if (grid[0] === undefined) {
            return (
                <div className="message-error">
                    <div className="grid">
                        <h2>Ups! We couldn't find this warrior...</h2>
                    </div>
                </div>
            )
        }
    }
    
    return (
        <div className="warriors-grid" onClick={handleClick}>
            {
                grid.map( (character) => {
                    return (
                        <WarriorCard id={character.id} key={character.id}/>
                    );
                })
            }
        </div>
    )
}
