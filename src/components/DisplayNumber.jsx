import React, { Component } from 'react';
import store from '../store';
export default class DisplayNumber extends Component{
  state = {
    number:store.getState().number
  }
  // subscribe 함수의 첫번째 인자의 함수는 리덕스 스토어의 값이 변경되었을 때 호출
  constructor(props){
    super(props);
    store.subscribe(function(){
      this.setState({number:store.getState().number}); 
    }.bind(this))
  }
  render(){
    return(
      <div>
        <h1>Display Number</h1>
        <input type="text" value={this.state.number} readOnly></input>
      </div>
    );
  }
}