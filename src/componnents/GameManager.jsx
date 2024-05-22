import React, { useState, useRef } from "react";

function GameManager() {
    const [currentGames, setCurrentGames] = useState([]);
    const [initialized, setInitialized] = useState(false);
    const [isGameStart, setIsGameStart] = useState(false);
    const isWin = useRef(false);

    const quitGame = (index) => {
      };

    const addPlayer = (player) => {
    };

    const startGame = () => {
    };

    function winGame(game) {
        return;
      }
    
    const handleMove = (move, index) => {
    };

    const handleNewGame = (gameToStart) => {
    };

    return (
        <>
            <div className="container-fluid">
                <div className="start-game">
                    <button type="button">
                        Add Player Button
                    </button>
                    <button type="button" onClick="startGame()" disabled={!currentGames.length}>
                        <img src="https://media.giphy.com/media/EEf5PgJnnNZyGvhoSC/giphy.gif" alt="Start Game"/>
                    </button>
                </div>
                
                <div className="row">
                    <div className="top-players">
                        <h3>Top Players will be shown here</h3>
                    </div>

                    <div className="game-board">
                        <h3>Game Board will be shown here</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GameManager;