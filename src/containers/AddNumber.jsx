import AddNumber from '../components/AddNumber';
import React, { Component } from 'react';
import { connect } from 'react-redux';
function mapReduxStateToReactProps(state) {
    return {
        number:state.number
    };
}
function mapReduxDispatchToReactProps() {
    return {};
}
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(AddNumber);

/*
export default class extends Component {
    render() {
        return <AddNumber onClick={function(size){
            store.dispatch({
                type:'INCREMENT',
                size:size
            })
        }.bind(this)}></AddNumber>
    }
} */