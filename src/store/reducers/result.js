import * as actionTypes from './actions';

const initState = {
    counter: 8,
    results: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);

            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;

    }
};

export default reducer;