import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Components/Home/Home';
import Header from './Components/Header/Header';
import Game from './Components/Game/Game';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HomePage} />
      <Route path="/game" component={Header} />
      <Route path="/game" component={Game} />
    </div>
  );
}

export default App;
