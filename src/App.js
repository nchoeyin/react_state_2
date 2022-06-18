import React, {Component} from 'react';
import Game2 from './Game2'; // we cannot write game2 in small case which would not work
import Demo from './Demo';
import Rando from './Rando';
import './App.css';
class App extends Component {
  render(){
    return (
            <div className="App">
              <Demo animal="Bobcat" food="Pine"/>
              <Game2 />
              <Rando />
           </div>
          );
}
}

export default App;
//Output: Your Score : 99