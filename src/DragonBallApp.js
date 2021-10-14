import React from 'react';
import logo from './assets/logo.png';
import { WarriorView } from './components/WarriorView';
import { Radar } from './components/Radar';

export const DragonBallApp = () => {

    return (
        <>

        <header className="head">
            <img className="logo" src={logo} alt="logo dragon ball super"></img>
        </header>

        <div className="content">
            <div className="character-view">
                <WarriorView />
            </div>

            <div className="search-panel">
                <Radar />
            </div>
        </div>


        </>
    )
}
