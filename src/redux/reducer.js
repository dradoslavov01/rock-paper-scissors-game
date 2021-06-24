const actionTypes = {
    SET_YOUR_SCORE: "SET_YOUR_SCORE",
    SET_PLAYER_SCORE: "SET_PLAYER_SCORE",
    SET_SCORE_MESSAGE: "SET_SCORE_MESSAGE",
    SET_ROUND: "SET_ROUND",
}

const INITIAL_STATE = {
    yourScore: 0,
    playerScore: 0,
    scoreMessage: '',
    round: 1
};

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case actionTypes.SET_YOUR_SCORE:
            if(action.method === 'clearing'){
                return {
                    ...state,
                    yourScore: 0
                };
            }else if(!action.method){
                return {
                    ...state,
                    yourScore: state.yourScore += 1
                };
            }
        case actionTypes.SET_PLAYER_SCORE:
            if (action.method === 'clearing') {
                return {
                    ...state,
                    playerScore: 0
                };
            } else if(!action.method){
                return {
                    ...state,
                    playerScore: state.playerScore += 1
                };
            }
        case actionTypes.SET_ROUND:
            if (action.method === 'clearing') {
                return {
                    ...state,
                    round: 1
                };
            } else if (!action.method) {
                return {
                    ...state,
                    round: state.round += 1
                };
            }
        case actionTypes.SET_SCORE_MESSAGE:
            return {
                ...state,
                scoreMessage: action.string
            };
        default:
            return state
    }
}

export default reducer;