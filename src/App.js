import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Ugliest Todo List In town</h1>        

        <TodoList />

      </div>
    );
  }
}

export default App;


// handleSubmit = (event) => {
//   event.preventDefault();
//   const { title, toDoList } = this.state;

//   axios.post ('http://localhost:4000/api/v1/todos', {title, toDoList} )
//     .then ( () => {
//       this.setState({ 
//         title: '', toDoList: [...this.state.toDoList, this.state.title]
//       })
//       this.getAllTitles();
//     })
//     .catch( (err) => console.log(err) )   
// }


// handleChange = event => {
//   const { name, value } = event.target;
//   this.setState({ [name]: value });
// };