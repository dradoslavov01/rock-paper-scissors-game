import './Header.css';
import {useState, useEffect} from 'react';
import { connect } from 'react-redux';


const Header = (props) => {

    const [className, setClassName] = useState(null);

    useEffect(() => {

        if(props.scoreMessage === 'You win') {
            setClassName("win")
        } else if(props.scoreMessage === 'You lose'){
            setClassName("lose")
        }else if(props.scoreMessage === 'Draw'){
            setClassName("draw")
        }
    }, [props.scoreMessage])

    return (
        <div className="headerContainer">
            <h1>Round: {props.round}</h1>
            <div className="score">
                <div className="player1">
                    <h3>You</h3>
                    <p>{props.yourScore}</p>
                </div>
                <div className="player2">
                    <h3>Player</h3>
                    <p>{props.playerScore}</p>
                </div>
            </div>
            <h2 className={className}>{props.scoreMessage}</h2>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        yourScore: state.yourScore,
        playerScore: state.playerScore,
        scoreMessage: state.scoreMessage,
        round: state.round
    }
}

export default connect(mapStateToProps)(Header);