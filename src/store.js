import { createStore } from 'redux';

export default createStore(function(state, action){
    if(state === undefined) { //초기상태
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        return{...state, number:state.number + action.size}
    }
    return state;
}, window.__REDUX_DEVTOOL__EXTENSION__ && window.__REDUX_DEVTOOL__EXTENSION__())