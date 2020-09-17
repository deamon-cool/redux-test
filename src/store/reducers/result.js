import * as actionTypes from '../actions';

const initState = {
    results: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })
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