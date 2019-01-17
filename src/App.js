import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entry: '',
      expression: '',
      isFirstOperator: true,
      currentOperator: '',
      total: null,
      entryIsPreviousAnswer: false
    }
  }

  handleClear = (e) => {
    console.log('clear function called');
    this.setState({
      entry: '',
      expression: '',
      isFirstOperator: true,
      currentOperator: '',
      total: null,
      entryIsPreviousAnswer: false
    });
  }

  handleDigit = (e) => {
    console.log('digit function called: ' + e.target.value);
    if(this.state.entryIsPreviousAnswer) {
      this.setState({
        entry: '' + e.target.value,
        expression: '' + e.target.value,
        isFirstOperator: true,
        currentOperator: '',
        total: null,
        entryIsPreviousAnswer: false
      });
    } else {
      this.setState({
        entry: this.state.entry + e.target.value,
        expression: this.state.expression + e.target.value
      });
    }
  }

  handleOperator = (e) => {
    console.log('operator function called: ' + e.target.value);
    if(this.state.isFirstOperator) {
      if(this.state.entryIsPreviousAnswer) {
        this.setState({
          expression: this.state.total + e.target.value,
          entry: '',
          currentOperator: e.target.value,
          isFirstOperator: false,
          entryIsPreviousAnswer: false
        });
      } else {
        this.setState({
          total: this.state.entry,
          expression: this.state.expression + e.target.value,
          entry: '',
          currentOperator: e.target.value,
          isFirstOperator: false
        });
      }
    } else {
      switch(e.target.value) {
        case '+/-':
          console.log('not implemented yet :p');
          break;

        case '=':
          this.equals();
          break;

        default:
          let result = this.doCalculation(this.state.currentOperator);
          this.setState({
            currentOperator: e.target.value,
            entry: '',
            expression: this.state.expression + e.target.value,
            total: result
          });
      } 
    }
  }

  doCalculation = (value) => {
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
    }
    return result;
  }

  divide = (first, second) => {
    const result = first / second;
    console.log('result: ' + result);
    return result;
  }

  multiply = (first, second) => {
    const result = first * second;
    console.log('result: ' + result);
    return result;
  }

  subtract = (first, second) => {
    const result = first - second;
    console.log('result: ' + result);
    return result;
  }

  add = (first, second) => {
    const result = first + second;
    console.log('result: ' + result);
    return result;
  }

  equals = () => {
    let result = this.doCalculation(this.state.currentOperator);
    this.setState({
      currentOperator: '',
      expression: this.state.expression + '=' + result,
      total: result,
      entry: result,
      isFirstOperator: true,
      entryIsPreviousAnswer: true
    });
  }

  renderInputKey(name, val, c, clickFunc) {
    return(
      <InputKey 
        className={c}
        id={name}
        value={val}
        onClick={clickFunc}
      />
    )
  }  

  render() {
    return (
      <div className="App">
        <Display
          expression={this.state.expression}
          entry={this.state.entry}
        />
        <div className="keypad">
          {this.renderInputKey('clear', 'AC', 'input-key', this.handleClear)}
          {this.renderInputKey('sign', '+/-', 'input-key operator', this.handleOperator)}
          {this.renderInputKey('divide', '÷', 'input-key operator', this.handleOperator)}
       
          {this.renderInputKey('seven', '7', 'input-key', this.handleDigit)}
          {this.renderInputKey('eight', '8', 'input-key', this.handleDigit)}
          {this.renderInputKey('nine', '9', 'input-key', this.handleDigit)}
          {this.renderInputKey('multiply', 'x', 'input-key operator', this.handleOperator)}
     
          {this.renderInputKey('four', '4', 'input-key', this.handleDigit)}
          {this.renderInputKey('five', '5', 'input-key', this.handleDigit)}
          {this.renderInputKey('six', '6', 'input-key', this.handleDigit)}
          {this.renderInputKey('subtract', '-', 'input-key operator', this.handleOperator)}
     
          {this.renderInputKey('one', '1', 'input-key', this.handleDigit)}
          {this.renderInputKey('two', '2', 'input-key', this.handleDigit)}
          {this.renderInputKey('three', '3', 'input-key', this.handleDigit)}
          {this.renderInputKey('multiply', '+', 'input-key operator', this.handleOperator)}
    
          {this.renderInputKey('zero', '0', 'input-key', this.handleDigit)}
          {this.renderInputKey('decimal', '.', 'input-key', this.handleDigit)}
          {this.renderInputKey('equals', '=', 'input-key operator', this.handleOperator)}
        </div>
      </div>
    );
  }
}

function Display(props) {
  return(
    <div className="display">
      <div className="expression">{props.expression}</div>
      <div className="entry">{props.entry}</div>
    </div>
  );
}


function InputKey(props) {
  return(
    <button className={props.className} id={props.id} onClick={props.onClick}
      value={props.value}>
      {props.value}
    </button>
  );
}

export default App;
