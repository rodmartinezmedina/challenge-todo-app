import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddListItem from './AddListItem';

class TodoList extends Component {
  this.state = {
     title: '',
     toDoList: [] 
  };

  getAllTitles = () => {
    axios.get(`http://localhost:4000/api/v1/todos`)
    .then((apiResponse) => {
      this.setState({ toDoList: apiResponse.data })
    })
  }
  
  componentDidMount() {
    this.getAllTitles()
  }

    // deleteListItem = (id) => {
  //   // this.id.preventDefault();
  //   axios
  //     .delete(`http://localhost:4000/api/v1/todos/${id}`)
  //   	.then( () => {
  //       console.log(`${id} deleted`);
  //       this.setState(this.item.id)      
  //       this.getAllTitles();     
  //     })
  //   	.catch( (err) => console.log(err))
  // }

  render() {
    const { toDoList } = this.state;

    return (
    <div>
      <AddListItem dataFromTodoList={this.getAllTitles } />
      <div>
        {
          listOfProjects.map( (project) => {
            return (
              <div key={project._id} className='project'>
                <Link to={`/projects/${project._id}`}>
                  <h3>{project.title}</h3>
                  <p>{project.description} </p>
                </Link>
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