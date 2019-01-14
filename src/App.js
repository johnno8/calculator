import React, { Component } from 'react';
import './App.css';

const keys = [{
    name: 'clear',
    displayValue: 'AC',
    class: 'input-key'
  },{
    name: 'clear-entry',
    displayValue: 'CE',
    class: 'input-key'
  },{
    name: 'subtract',
    displayValue: '-',
    class: 'input-key operator'
  },{
    name: 'seven',
    displayValue: '7',
    class: 'input-key'
  },{
    name: 'eight',
    displayValue: '8',
    class: 'input-key'
  },{
    name: 'nine',
    displayValue: '9',
    class: 'input-key'
  },{
    name: 'add',
    displayValue: '+',
    class: 'input-key operator'
  },{
    name: 'four',
    displayValue: '4',
    class: 'input-key'
  },{
    name: 'five',
    displayValue: '5',
    class: 'input-key'
  },{
    name: 'six',
    displayValue: '6',
    class: 'input-key'
  },{
    name: 'divide',
    displayValue: '/',
    class: 'input-key operator'
  },{
    name: 'one',
    displayValue: '1',
    class: 'input-key'
  },{
    name: 'two',
    displayValue: '2',
    class: 'input-key'
  },{
    name: 'three',
    displayValue: '3',
    class: 'input-key'
  },{
    name: 'multiply',
    displayValue: 'x',
    class: 'input-key operator'
  },{
    name: 'sign',
    displayValue: '+/-',
    class: 'input-key operator'
  },{
    name: 'zero',
    displayValue: '0',
    class: 'input-key'
  },{
    name: 'decimal',
    displayValue: '.',
    class: 'input-key'
  },{
    name: 'equals',
    displayValue: '=',
    class: 'input-key'
  }];
  
class App extends Component {
  render() {
    return (
      <div className="App">
        <Display/>
        <KeyPad/>
      </div>
    );
  }
}

function Display(props) {

}

function KeyPad(props) {

}

function InputKey(props) {

}

export default App;
