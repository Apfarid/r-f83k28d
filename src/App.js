import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state= {
    numero : 0
  }
  
  sumar(){
    this.setState({
      numero : this.state.numero + 1
    })
  }




  render() {
    return (
      <div>
        <span className="value">{this.state.numero}</span>
        <button id="inc" onClick={this.sumar.bind(this)} >Incrementa</button>
      </div>
    );
  }
}

export default App;
