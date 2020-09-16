const initState = {
    counter: 8,
    results: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD_VALUE':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUBTRACT_VALUE':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            };
        default:
            return state;

    }
};

export default reducer;