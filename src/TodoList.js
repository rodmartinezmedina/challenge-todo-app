import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TodoList extends Component {
  state = {
     title: '',
     toDoList: [] 
  };

  getAllTitles = () => {
    axios.get(`http://localhost:4000/api/v1/todos`)
    .then((apiResponse) => {
      this.setState({ toDoList: apiResponse.data })
    })
  };

  deleteListItem = (id) => {
    // this.id.preventDefault();
    axios
      .delete(`http://localhost:4000/api/v1/todos/${id}`)
    	.then( () => {
        console.log(`${id} deleted`);
        this.setState(this.item.id)      
        this.getAllTitles();     
      })
    	.catch( (err) => console.log(err))
  }

  componentDidMount() {
    this.getAllTitles()
  }
  

}