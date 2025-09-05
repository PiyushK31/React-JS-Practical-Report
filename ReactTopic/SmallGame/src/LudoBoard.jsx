import { useState } from "react";

function LudoBoard() {
  let [moves, setMoves] = useState({
    blue: 0,
    red: 0,
    yellow: 0,
    green: 0,
  });

    let UpdateBlue = (prevMoves) => {
        // console.log(`moves.blue = ${moves.blue}`);
        setMoves((prevMoves) => {
            return  {...prevMoves , blue: prevMoves.blue+1};
        });
    };

    let UpdateYellow = (prevMoves) => {
        // console.log(`moves.Yellow = ${moves.yellow}`);
        setMoves((prevMoves) => {
            return  {...prevMoves , yellow: prevMoves.yellow+1};
    });
};

    let UpdateGreen = (prevMoves) => {
        // console.log(`moves.Green = ${moves.green}`);
        setMoves((prevMoves) => {
            return  {...prevMoves , green: prevMoves.green+1};
    });
};

     let UpdateRed = (prevMoves) => {
        // console.log(`moves.Red = ${moves.red}`);
        setMoves((prevMoves) => {
            return  {...prevMoves , red: prevMoves.red+1};
    });
};

    return(
    <>
    <div>
        <h2>Game start!</h2>
        <div className="board">

            <p>Blue moves = {moves.blue}</p>
            <button style={{background:"blue" }} onClick={UpdateBlue}>
                +1 
            </button>

            <p>Yellow moves = {moves.yellow}</p>
            <button style={{background:"yellow" , color:"black"}} onClick={UpdateYellow}>
                +1
            </button>

            <p>Green moves = {moves.green}</p>
            <button style={{background:"green"}} onClick={UpdateGreen}>
                +1
            </button>

            <p>Red moves = {moves.red}</p>
            <button style={{background:"Red"}} onClick={UpdateRed}>
                +1
            </button>
        </div>
    </div>
    </>
    );
}
export default LudoBoard;
