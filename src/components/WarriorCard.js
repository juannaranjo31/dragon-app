import React from 'react';
import {searchByName} from '../helpers/searchByName';

export const WarriorCard = ( {id='goku'} ) => {
    const warrior = searchByName(id);

    return (
        <div className="card" id={id}>
            <div className="warrior-image">
                <img src={window.location.origin + `/${warrior.img}`} alt={warrior.name} id={id}/>
            </div>
            
            <div className="warrior-name">
                <h3 id={id}>{warrior.name}</h3>
            </div>
        </div>
    )
}
