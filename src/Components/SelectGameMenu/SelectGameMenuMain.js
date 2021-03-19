import React from 'react'

import "./SelectGameMenuMain.css";

//Components
import Card from "./SelectGameMenuCard.js";
import InGame from "./InTheGameInfo.js";

function SelectGameMenuMain({ isAdmin }) {

    if (!isAdmin) {
        return (
            <div>
                <InGame />
            </div>
        )
    }

    return (
        <div className="SelectGameMenuDiv">
            <h1>Available Games</h1>
            <div className="AvailableGames">
                <Card
                    name="1 Truth 2 Lies"
                    imageSrc="https://www.thebostoncalendar.com/system/events/photos/000/307/133/original/Untitled.png?1576701591"
                    imageAlt="1 truth 2 lies"
                    index={0}
                />
            </div>
            <h2>Comming Soon</h2>
            <div className="CommingSoonGames">
                <p>Not working on any game at the moment</p>
                <p>Planned games are: Math, love o meter</p>
            </div>


        </div>
    )
}

export default SelectGameMenuMain