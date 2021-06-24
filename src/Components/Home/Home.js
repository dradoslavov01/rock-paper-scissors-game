import style from './Home.module.css';
import { Link } from 'react-router-dom'; 


const HomePage = () => {
    return (
        <div className={style.homeContainer}>
            <h1>ROCK PAPER SCISSORS</h1>
            <h3>Have fun and enjoy the game</h3>
            <Link to="/game">Start Game</Link>
        </div>
    );
};

export default HomePage;