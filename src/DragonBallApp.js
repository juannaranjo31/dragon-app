import React from 'react';
import logo from './assets/logo.png';
import { WarriorView } from './components/WarriorView';
import { Radar } from './components/Radar';
import { useState } from 'react';

export const DragonBallApp = ({ idView }) => {
    const [id, setId] = useState('goku');

    const handleClick = (e) => {

        
            if (e.target.id) {
                idView = e.target.id;
                setId(idView);
            }
        
    }

    return (
        <>

            <header className="head">
                <img className="logo" src={logo} alt="logo dragon ball super"></img>
            </header>

            <div className="content">
                <div className="character-view">
                    <WarriorView id={id} />
                </div>

                <div className="search-panel" onClick={handleClick}>
                    <Radar idView='goku' />
                </div>
            </div>


        </>
    )
}
