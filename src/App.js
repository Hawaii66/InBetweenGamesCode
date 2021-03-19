import './App.css';
import React, { useState, useEffect } from 'react'

//Scripts
import { handleShowLogin, handleCreateServer } from './Scripts/LoginHandler.js'
import { socket } from "./Socket/socketEmit.js";
import { ShowGames } from "./Socket/socketResieve.js";

//Components
import Login from "./Components/Login/Login";
import SelectGameMenu from "./Components/SelectGameMenu/SelectGameMenuMain.js";
import Game1T2L from "./Components/Games/1Truth2LiesGame/Game1Truth2LiesMain.js";

function App() {
    const [showLogin, setShowLogin] = useState(true);
    const [showSelectGameMenu, setSelectGameMenu] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const [LoginName, setLoginName] = useState("");
    const [LoginPin, setLoginPin] = useState(0);
    const [CurrentServerPin, setCurrentServerPin] = useState();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        let socket1 = socket;
        socket1.on("ShowGame", (data) => {
            ShowGames(data, (newState) => {
                setShowLogin(!newState);
                setSelectGameMenu(!newState);
                setShowGame(newState);
            });
        });
        socket1.on("ShowGames", (data) => {
            setIsAdmin(data);
        });

    }, [])

    const handleChangeName = event => {
        setLoginName(event.target.value);
    }

    const handleChangePin = event => {
        setLoginPin(event.target.value);
    }

    const handleLogin = event => {
        event.preventDefault();
        handleShowLogin(LoginName, LoginPin, (result) => {
            console.log(result);
            setShowLogin(false);
            setSelectGameMenu(true);
        });
    }

    const createServer = () => {
        handleCreateServer(setCurrentServerPin)
    }
    //test

    return (
        <div className="App" >
            {showLogin ? < Login onSubmit={handleLogin}
                onChangeName={handleChangeName}
                onChangePin={handleChangePin}
                createServer={createServer}
                currentPin={CurrentServerPin}
            /> : null}

            { showSelectGameMenu ? <SelectGameMenu isAdmin={isAdmin} /> : null}

            { showGame ? <Game1T2L /> : null}
        </div>
    );
}

export default App;