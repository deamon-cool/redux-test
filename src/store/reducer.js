const initState = {
    counter: 8
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        case 'ADD_VALUE':
            return {
                counter: state.counter + action.value
            };
        case 'SUBTRACT_VALUE':
            return {
                counter: state.counter - action.value
            };
        default:
            return state;

    }
};

export default reducer;