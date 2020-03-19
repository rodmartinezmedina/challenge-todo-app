import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueFromFormInput: '',
      toDoList: []
    };
  }

handleSubmit = (event) => {
    event.preventDefault();
    this.state = {
      valueFromFormInput: '',
      toDoList: []
    };

    axios.post('http://localhost:4000/api/v1'), 

    this.setState({
      valueFromFormInput: '',
      toDoList: [...this.state.toDoList, this.state.valueFromFormInput]
    });
  }

  handleChange = (event) => {
    this.setState({ valueFromFormInput: event.target.value })
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> To do list</h1>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.toDoList} onchange={this.handleChange} />
            <button>Add to list</button>
          </form>     
        </header>
      </div>
    );
  }
}

export default App;
