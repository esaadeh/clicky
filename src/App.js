import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import Shuffle from 'shuffle';


var deck = Shuffle.shuffle({ deck: cards });

class App extends Component {

  state = {
    randomId: 0,
    tally: 0,
    score: 0,
    topScore: 0,
    guessCorrect: true,
    clickedPics: [],
    pics: cards
  };

  componentDidMount() {
    this.setNewRandomId(this.state.pics)
  }

  handleClicked = id => {
    this.setState({
      tally: this.state.tally + 1
    });
    if (this.state.randomId === id) {
      this.setState({
        score: this.state.score + 1
      });
      this.setNewRandomId(this.state.pics);
    }
  }

  setNewRandomId = (array) => {
    const randomId = array[Math.floor(Math.random() * array.length)].id;
    console.log(randomId);
    this.setState({
      randomId: randomId
    });
  }



  render() {
    return (
      <div className="container">
        <Scoreboard
          guessCorrect={this.state.guessCorrect}
          score={this.state.score}
          tally={this.state.tally}
          topScore={this.state.topScore}
          randomId={this.state.randomId} />
        <div className="row">
          {this.state.pics.map(pic => (
            <Card
              key={pic.id}
              id={pic.id}
              name={pic.name}
              image={pic.image}
              handleClicked={this.handleClicked}
            />
          ))}

        </div>
      </div>
    );
  }
}

export default App;
