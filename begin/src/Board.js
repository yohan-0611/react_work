import { useState } from "react";
import Square from "./Square";

export default function Board(){

    const[squares, setSquares] = useState(Array(9).fill(null));
    const[xisNext,setxIsNext] = useState(true);

    function handleClick(i){
      
        
        if(squares[i] ||   calculateWinner(squares)){
            return;
        }
        const nextSquares = squares.slice();
        if(xisNext){
            nextSquares[i] = 'x';
        }
        else nextSquares[i] = 'o';

       

        setSquares(nextSquares);
        setxIsNext(!xisNext);
       
    }
    const winner = calculateWinner(squares);

    function calculateWinner(square){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];

          for(let i = 0; i < lines.length; i++){
            const[a,b,c] = lines[i];
            console.log("a ->",a,"b -> ", b,"c -> " , c)
            console.log("square a의 값 : " ,square[a]);
            console.log("square b의 값 : " ,square[b]);
            console.log("square c의 값 : " ,square[c]);

            if(square[a] && square[a] === square[b] && square[a] === square[c])
                return square[a];
          }
             return null;
    }

    return(
        <>
            <div className="status">
                {winner} 가 이김 수고요

            </div>

            <div className="board-row">
            <Square value={squares[0]} onSquareClick = {()=> handleClick(0)}/>
            <Square value={squares[1]} onSquareClick = {()=> handleClick(1)}/>
            <Square value={squares[2]} onSquareClick = {()=> handleClick(2)}/>
            </div>

            <div className="board-row">
            <Square value={squares[3]} onSquareClick ={()=> handleClick(3)}/>
            <Square value={squares[4]} onSquareClick = {()=> handleClick(4)}/>
            <Square value={squares[5]} onSquareClick = {()=> handleClick(5)}/>
            </div>

            <div className="board-row">
            <Square value={squares[6]} onSquareClick ={()=> handleClick(6)}/>
            <Square value={squares[7]} onSquareClick = {()=> handleClick(7)}/>
            <Square value={squares[8]} onSquareClick ={()=> handleClick(8)}/>
            </div>

            </>
    );
}