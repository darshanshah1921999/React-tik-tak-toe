import React from 'react';
import './App.css';
import Board from './components/Board';
import UserInput from './components/UserInput';

function App() {
  const [player1,setPlayer1] = React.useState("");
  const [player2,setPlayer2] = React.useState("");
  const [dimension,setDimension] = React.useState(3);
  const handlePlayer1Change = (event) => {
    setPlayer1(event.target.value);
  }
  const handlePlayer2Change = (event) => {
    setPlayer2(event.target.value);
  } 
  const handleDimensionChange = (event) => {
    if(dimension<=8){
      setDimension(event.target.value);
    }
  }
  return (
    <>
      {/* <UserInput player1={player1} handlePlayer1Change={handlePlayer1Change} player2={player2} handlePlayer2Change={handlePlayer2Change} 
                 dimension={dimension} handleDimensionChange={handleDimensionChange}/> */}
      <div className="game-container">
        <Board dimension={dimension}/>
      </div>
    </>
  );
}

export default App;
