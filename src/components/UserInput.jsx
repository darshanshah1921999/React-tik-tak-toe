import React, { useState } from "react";

export default function UserInput(props){
    const {player1,player2,dimension,handlePlayer1Change,handlePlayer2Change,handleDimensionChange} = props;
    return(
        <>
            <span>Player 1 name:</span>
            <input
                id="player1"
                name="player1"
                value={player1}
                onChange={(event) => handlePlayer1Change(event)}
            />
            <br />
            <br />
            <span>Player 2 name:</span>
            <input
                id="player2"
                name="player2"
                value={player2}
                onChange={(event) =>  handlePlayer2Change(event)}
            />
            <br />
            <br />
            {/* <span>Enter Dimension:</span>
            <input
                id="dimension"
                name="dimension"
                value={dimension}
                onChange={(event) => handleDimensionChange(event)}
            /> */}
            <button id="game-start" onclick="startGame()">Start Game</button>
            <br />
        </>
    );
}