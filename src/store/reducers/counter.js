import * as actionTypes from './actions';

const initState = {
    counter: 8
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD_VALUE:
            return {
                ...state,
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT_VALUE:
            return {
                ...state,
                counter: state.counter - action.value
            };
        default:
            return state;

    }
};

export default reducer;