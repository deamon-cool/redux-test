const redux = request('redux');
const createStore = redux.createStore;

// Reducer
const rootReducer = (state, action) => {
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());