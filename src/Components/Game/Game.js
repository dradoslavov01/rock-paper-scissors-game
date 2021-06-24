import './Game.css'
import { useEffect, useState } from 'react';
import Weapons from './Weapons/Weapons';
import score from './score';

import { connect } from 'react-redux';



const Game = (props) => {

    const [yourPick, setYourPick] = useState('');
    const [playerPick, setPlayerPick] = useState('');

    const [yourWeapon, setYourWeapon] = useState('');
    const [playerWeapon, setPlayerWeapon] = useState('');


    useEffect(() => {
        //getting only name of the weapon
        setYourWeapon(yourPick.slice(14, yourPick.length).split('.')[0]);
        setPlayerWeapon(playerPick.slice(14, playerPick.length).split('.')[0]);
        
    }, [yourPick, playerPick]);

    useEffect(() => {
        return score(yourWeapon, playerWeapon, props.setYourScore, props.setPlayerScore, props.setScoreMessage);
    }, [playerWeapon, props.setScoreMessage])

   
    return (
        <>
            <div className="mainContainer">
                <div className="pickItem">
                    <span className="yourPick">
                        {yourPick !== ''
                            ? <img src={yourPick} alt={'img'} />
                            : ''
                        }
                    </span>
                    <h3>Your choice: {yourWeapon.toUpperCase()}</h3>
                </div>

                <div className="pickItem">
                    <span className="playerPick">
                        {playerPick !== ''
                            ? <img src={playerPick} alt={'img'} />
                            : ''
                        }
                    </span>
                    <h3>Player choice: {playerWeapon.toUpperCase()}</h3>
                </div>
            </div>
            <Weapons setYourPick={setYourPick} setPlayerPick={setPlayerPick} playerPick={playerPick} />
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setYourScore: () => dispatch({ type: "SET_YOUR_SCORE" }),
        setPlayerScore: () => dispatch({ type: "SET_PLAYER_SCORE" }),
        setScoreMessage: (string) => dispatch({ type: "SET_SCORE_MESSAGE", string: string})
    }
}



export default connect(null, mapDispatchToProps)(Game);