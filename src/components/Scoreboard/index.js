import React from "react";


function Scoreboard(props) {
  return (
    <header>
      <div className="row">
        <div className="col-md-12">
        <h1>Clicky Game</h1>
        <h2>{props.guessCorrect}</h2>
          <p>Rando Num: {props.num}</p>
          <p>Tally: {props.tally}</p>
          <p>Score: {props.score}</p>
          <p>Top Score: {props.topScore}</p>
        </div>
      </div>
    </header>
  )
}


export default Scoreboard;