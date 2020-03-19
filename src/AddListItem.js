import React, { Component } from 'react';
import axios from 'axios';

class AddListItem extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", toDoList: [] };
  }
   
  handleSubmit = (event) => {
  event.preventDefault();
  const { title, toDoList } = this.state;

  axios.post ('http://localhost:4000/api/v1/todos', {title, toDoList} )
    .then ( () => {
      this.props.getData();
      this.setState ({ 
        title: '', toDoList: [...this.state.toDoList, this.state.title]
      })
      this.getAllTitles();
    })
    .catch( (err) => console.log(err) )   
  }


  handleChange = event => {
  const { name, value } = event.target;
  this.setState({ [name]: value });
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type="text"
          name="title"
          value={this.state.title}
          onChange={ (e) => this.handleChange(e) } />
          <button>Add to list</button>
            
        </form>      
      </div>
    )
  }
}

export default AddListItem;