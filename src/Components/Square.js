import React from 'react'
import "../App.css";
function Square({ val, chooseSquare }) {
    return (
        <div className={`square ${val ? val === "X" ? "x" : "o" : ""}`} onClick={chooseSquare}>
            {val}
        </div>
    );
}

export default Square