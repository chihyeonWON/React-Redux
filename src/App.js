import React, { Component } from 'react';
import './App.css';

function App() {
  return(
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>      
    </div>
  );
}
class DisplayNumberRoot extends Component {
  render(){
    return(
      <div>
        <h1>Display Number Root</h1>
        <DisplayNumber></DisplayNumber>
      </div>
    );
  }
}
export default App;
