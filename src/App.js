import React, { Component } from 'react';
import './App.css';

const keys = [{
    name: 'clear',
    displayValue: 'AC',
    class: 'input-key',
    operator: true
  },{
    name: 'clear-entry',
    displayValue: 'CE',
    class: 'input-key',
    operator: true
  },{
    name: 'divide',
    displayValue: '÷',
    class: 'input-key operator',
    operator: true
  },{
    name: 'seven',
    displayValue: 7,
    class: 'input-key',
    operator: false
  },{
    name: 'eight',
    displayValue: 8,
    class: 'input-key',
    operator: false
  },{
    name: 'nine',
    displayValue: 9,
    class: 'input-key',
    operator: false
  },{
    name: 'multiply',
    displayValue: 'x',
    class: 'input-key operator',
    operator: true
  },{
    name: 'four',
    displayValue: 4,
    class: 'input-key',
    operator: false
  },{
    name: 'five',
    displayValue: 5,
    class: 'input-key',
    operator: false
  },{
    name: 'six',
    displayValue: 6,
    class: 'input-key',
    operator: false
  },{
    name: 'subtract',
    displayValue: '-',
    class: 'input-key operator',
    operator: true
  },{
    name: 'one',
    displayValue: 1,
    class: 'input-key',
    operator: false
  },{
    name: 'two',
    displayValue: 2,
    class: 'input-key',
    operator: false
  },{
    name: 'three',
    displayValue: 3,
    class: 'input-key',
    operator: false
  },{
    name: 'add',
    displayValue: '+',
    class: 'input-key operator',
    operator: true
  },{
    name: 'sign',
    displayValue: '+/-',
    class: 'input-key operator',
    operator: true
  },{
    name: 'zero',
    displayValue: 0,
    class: 'input-key',
    operator: false
  },{
    name: 'decimal',
    displayValue: '.',
    class: 'input-key',
    operator: false
  },{
    name: 'equals',
    displayValue: '=',
    class: 'input-key',
    operator: true
  }];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keys: keys
    }
  }

  handleClick = (param) => (e) => {
    if(param) {
      console.log('operator: ' + param);
      console.log('e.target.value: ' + e.target.value);
    } else {
      console.log('not operator');
      console.log('e.target.value: ' + e.target.value);
    }
  }

  render() {
    return (
      <div className="App">
        <Display/>
        <KeyPad
          keys={this.state.keys}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

function Display(props) {
  return(
    <div class="display">
      <div class="expression">342+124-</div>
      <div class="entry">968</div>
    </div>
  );
}

function KeyPad(props) {
  return(
    <div className="keypad">
      {props.keys.map((key) => {
          return(
            <InputKey 
              id={key.name}
              displayValue={key.displayValue}
              classToAdd={key.class}
              onClick={props.onClick}
              operator={key.operator}
            />
          );
        })
      }
    </div>
  );
}

function InputKey(props) {
  return(
    <button className={props.classToAdd} id={props.id} onClick={props.onClick(props.operator)}
      value={props.displayValue}>
      {props.displayValue}
    </button>
  );
}

export default App;
