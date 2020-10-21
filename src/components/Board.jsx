import React from "react";
import Row from "./Row";

export default function Board(props){
    // const {dimension} = props;
    const dimension = 4;
    const initialBoard = Array(dimension).fill(null).map(() => Array(dimension).fill(null));
    const [board,setBoard]  = React.useState(initialBoard);
    const [isZero,setIsZero] = React.useState(0);

    let isGameOver = false;
    // console.log(board);
    let rows = new Array(dimension);
    for(let i=0; i<dimension;i++){
        rows[i] = i;
    }
    // console.log(rows);

    const checkWin = (board) => {
        const row = board.length;
        const col = board[0].length;
        let gameOver = true;
        //check each row
        for(let i=0;i<row;i++){
            let cell = board[i][0];
            if(cell===null){
                gameOver = false;
                continue;
            } 
            gameOver = true;
            for(let j=1;j<col;j++){
                if(board[i][j]!==cell){
                    gameOver = false;
                    break;
                }
            }
            if(gameOver){
                gameOver = true;
                break;
            }
        }
        if(gameOver)    return gameOver;

        //check for each column
        for(let i=0;i<row;i++){
            let cell = board[0][i];
            if(cell===null){
                gameOver = false;
                continue;
            }
            gameOver = true;
            for(let j=1;j<col;j++){
                if(board[j][i]!==cell){
                    gameOver = false;
                    break;
                }
            }
            if(gameOver){
                gameOver = true;
                break;
            }
        }
        if(gameOver)    return gameOver;

        //check for diagonal
        gameOver = true;
        for(let i=1;i<row;i++){
            if(board[0][0]===null){
                gameOver = false;
                break;
            }
            if(board[0][0]!==board[i][i]){
                gameOver = false;
            }
        }
        if(gameOver)    return gameOver;
        //check for second diagonal
        gameOver = true;
        for(let i=1;i<row;i++){
            if(board[0][row-1]===null){
                gameOver = false;
                break;
            }
            if(board[0][row-1]!==board[i][row-i-1]){
                gameOver = false;
            }
        }
        if(gameOver)    return gameOver;
    }
    const handleButtonClick = (id) => {
        if(!checkWin(board)){
            const copyBoard = [...board];
            let row = id[0];
            let col = id[1];
            if(!copyBoard[row][col]){
                copyBoard[row][col] = (isZero===0)?"0":"X";
                if(isZero===0){
                    setIsZero(1);
                }
                else{
                    setIsZero(0);
                }
            }
           
            setBoard(copyBoard);
        }
    }

    const listRows = rows.map((val,index) =>{
            return (
                <>
                    <Row key={val.toString()} dimension={dimension} rowIndex={val} handleButtonClick={handleButtonClick} rowVal={board[index]}/> 
                </>
            )
        }    
    );
    // console.log(listRows);
    return(
       <>
            {listRows}
        </>
    )
}