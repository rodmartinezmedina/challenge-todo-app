import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddListItem from './AddListItem';

class TodoList extends Component {
  state = {
     title: '',
     toDoList: [] 
  };

  getAllTitles = () => {
    axios.get(`http://localhost:4000/api/v1/todos`)
    .then((apiResponse) => {
      this.setState({ ToDoList: apiResponse.data })
    })
  }
  
    deleteListItem = (id) => {
    axios
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
    	.then( () => {
        console.log(`Deleted ${id} task`);
        this.getAllTitles();     
      })
    	.catch( (err) => console.log(err))
  }

  componentDidMount() {
    this.getAllTitles()
  }

  render() {
    const { toDoList } = this.state;

    return (
    <div> 
      <AddListItem dataFromTodoList={this.getAllTitles } />
      <div>
        {
          toDoList.map( (todoItem) => {
            return (
              <div key={todoItem._id} className='todoItem'>
                {/* <Link to={`/todos/${todoItem._id}`}> */}
                  <h3>{todoItem.title}</h3>
                {/* </Link> */}
              </div>
            )
          })
        }
      </div>  
    
    </div>
    )
  }
}


export default TodoList;

{/* <button onClick={ () => this.deleteListItem()}>Delete Item</button> */}