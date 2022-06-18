import React, {Component} from "react";
class Game2 extends Component{
    state = { //This is an alternate syntax to the constructor method for react state
        score : 99,
        gameOver : false
    };
    render () {
        return (
            <div>
                <h1>Your score : {this.state.score}</h1>
            </div>
        );
    }
}
export default Game2;