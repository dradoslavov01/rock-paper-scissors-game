import style from './Weapons.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import rock from '../../../assets/rock.png';
import paper from '../../../assets/paper.png';
import scissors from '../../../assets/scissors.png';

import { connect } from 'react-redux';


const Weapons = (props) => {

    const weapons = [rock, paper, scissors];


    const [choice, setChoice] = useState('');
    const history = useHistory();

    const selectHandler = (e) => {
        setChoice(e.target.id)
        props.setYourPick(e.target.id);
        setTimeout(() => {
            props.setPlayerPick(weapons[Math.floor(Math.random(weapons) * 3)]);
        }, 1000);
    }

    const nextRoundHandler = () => {
        setChoice('')
        props.setYourPick('');
        props.setPlayerPick('');
        props.setRound();
        props.setScoreMessage('');
    }

    const newGameHandler = () => {
        props.setPlayerScore('clearing');
        props.setYourScore('clearing');
        props.setRound('clearing');
        props.setScoreMessage('');
        history.push('/');
    }

    return (
        <div className={style.weapons}>
            {props.playerPick === ''
                ? <>
                    {choice === ''
                        ? <>
                            <img src={rock} onClick={selectHandler} id={rock} alt='rockIcon' />
                            <img src={paper} onClick={selectHandler} id={paper} alt='rockIcon' />
                            <img src={scissors} onClick={selectHandler} id={scissors} alt='rockIcon' />
                        </>
                        : null
                    }
                </>

                : <>
                    <button onClick={nextRoundHandler} className={style.playAgainBtn}>Next round</button>
                    <button onClick={newGameHandler} to="/" className={style.newGameLink}>New Game</button>
                </>
            }
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setYourScore: (method) => dispatch({ type: "SET_YOUR_SCORE", method }),
        setPlayerScore: (method) => dispatch({ type: "SET_PLAYER_SCORE", method }),
        setRound: (method) => dispatch({type: "SET_ROUND", method}),
        setScoreMessage: (string) => dispatch({ type: "SET_SCORE_MESSAGE", string }),
    }
}


export default connect(null, mapDispatchToProps)(Weapons);