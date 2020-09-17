import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions.js';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        console.log('render')

        return (
            <div>
                <CounterOutput value={this.props.counterValue} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddValue} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractValue} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storeResult => (
                        <li key={storeResult.id}
                            onClick={() => this.props.onDeleteReult(storeResult.id)}>{storeResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps')

    return {
        counterValue: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    console.log('mapDispatchToProps')

    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddValue: () => dispatch({ type: actionTypes.ADD_VALUE, value: 5 }),
        onSubtractValue: () => dispatch({ type: actionTypes.SUBTRACT_VALUE, value: 5 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteReult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);