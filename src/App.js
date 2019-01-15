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
    displayValue: '7',
    class: 'input-key',
    operator: false
  },{
    name: 'eight',
    displayValue: '8',
    class: 'input-key',
    operator: false
  },{
    name: 'nine',
    displayValue: '9',
    class: 'input-key',
    operator: false
  },{
    name: 'multiply',
    displayValue: 'x',
    class: 'input-key operator',
    operator: true
  },{
    name: 'four',
    displayValue: '4',
    class: 'input-key',
    operator: false
  },{
    name: 'five',
    displayValue: '5',
    class: 'input-key',
    operator: false
  },{
    name: 'six',
    displayValue: '6',
    class: 'input-key',
    operator: false
  },{
    name: 'subtract',
    displayValue: '-',
    class: 'input-key operator',
    operator: true
  },{
    name: 'one',
    displayValue: '1',
    class: 'input-key',
    operator: false
  },{
    name: 'two',
    displayValue: '2',
    class: 'input-key',
    operator: false
  },{
    name: 'three',
    displayValue: '3',
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
    displayValue: '0',
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
      keys: keys,
      entry: '',
      expression: '',
      calculate: false,
      currentOperator: '',
      total: null
    }
  }

  handleClick = (oper) => (e) => {
    if(oper) {
      this.handleOperator(e.target.value);
    } else {
      this.handleDigit(e.target.value);
    }
  }

  handleDigit = (value) => {
    this.setState({
      entry: this.state.entry + value,
      expression: this.state.expression + value
    });
  }

  handleOperator = (value) => {
    if(!this.state.calculate) {
      this.setState({
        total: this.state.entry,
        expression: this.state.expression + value,
        entry: '',
        currentOperator: value,
        calculate: true
      });
    } else {
      this.doOperation(this.state.currentOperator);
      this.setState({
        currentOperator: value,
        entry: '',
        expression: this.state.expression + value
      });
      // switch(value) {
      //   case '÷':
      //     this.divide();
      //     break;
      //   case 'x':
      //     this.multiply();
      //     break;
      //   case '-':
      //     this.subtract();
      //     break;
      //   case '+':
      //     this.add();
      //     break;
      //   case '=':
      //     this.equals();
      //     break;
      // }
    }
  }

  divide = (first, second) => {
    // const result = Number(this.state.total) / Number(this.state.entry);
    // this.setState({
    //   total: result,
    //   entry: '',
    //   expression: this.state.expression + '÷'
    // });
    const result = first / second;
    console.log('result: ' + result);
    return result;
  }

  multiply = (first, second) => {
    // const result = Number(this.state.total) * Number(this.state.entry);
    // this.setState({
    //   total: result,
    //   entry: '',
    //   expression: this.state.expression + 'x'
    // });
    const result = first * second;
    console.log('result: ' + result);
    return result;
  }

  subtract = (first, second) => {
    // const result = Number(this.state.total) - Number(this.state.entry);
    // this.setState({
    //   total: result,
    //   entry: '',
    //   expression: this.state.expression + '-'
    // });
    const result = first - second;
    console.log('result: ' + result);
    return result;
  }

  add = (first, second) => {
    // const result = Number(this.state.total) + Number(this.state.entry);
    // this.setState({
    //   total: result,
    //   entry: '',
    //   expression: this.state.expression + '+'
    // });
    const result = first + second;
    console.log('result: ' + result);
    return result;
  }

  equals = () => {

  }

  doOperation = (value) => {
    let result = null;
    switch(value) {
      case '÷':
        result = this.divide(Number(this.state.total), Number(this.state.entry));
        break;
      case 'x':
        result = this.multiply(Number(this.state.total), Number(this.state.entry));
        break;
      case '-':
        result = this.subtract(Number(this.state.total), Number(this.state.entry));
        break;
      case '+':
        result = this.add(Number(this.state.total), Number(this.state.entry));
        break;
      case '=':
        this.equals();
        break;
    }
    this.setState({
      total: result
    });
  }

  render() {
    return (
      <div className="App">
        <Display
          expression={this.state.expression}
          entry={this.state.entry}
        />
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
      <div class="expression">{props.expression}</div>
      <div class="entry">{props.entry}</div>
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
