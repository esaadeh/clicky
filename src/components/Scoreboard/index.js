import React from "react";


function Scoreboard(props) {
    return (
        <div className="row">
          <div className="col-md-12">
            <header>
              <p>Rando Num: {props.num}</p>
              <p>Score: {props.score}</p>
              <p>Top Score: {props.topScore}</p>
            </header>
          </div>
        </div>
    )
}


export default Scoreboard;