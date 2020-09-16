import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                    <li onClick={this.props.onDeleteReult}></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps')

    return {
        counterValue: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    console.log('mapDispatchToProps')

    return {
        onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
        onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddValue: () => dispatch({ type: 'ADD_VALUE', value: 5 }),
        onSubtractValue: () => dispatch({ type: 'SUBTRACT_VALUE', value: 5 }),
        onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
        onDeleteReult: () => dispatch({ type: 'DELETE_RESULT' })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);