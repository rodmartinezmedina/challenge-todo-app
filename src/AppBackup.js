import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', toDoList: [] };
  }


  getAllTitles = () => {
    axios.get(`http://localhost:4000/api/v1/todos`)
    .then((apiResponse) => {
      this.setState({ toDoList: apiResponse.data })
    })
  };


  deleteListItem = (id) => {
    // this.id.preventDefault();
    axios
      .delete(`http://localhost:4000/api/v1/todos/${this.id}`)
    	.then( () => {
        console.log(`Item list ${id} deleted`);
        this.setState(this.item.id)      
        this.getAllTitles();     
      })
    	.catch( (err) => console.log(err))
  }


  componentDidMount() {
    this.getAllTitles()
  }


  handleSubmit = (event) => {
    event.preventDefault();
    const { title, toDoList } = this.state;

    axios.post ('http://localhost:4000/api/v1/todos', {title, toDoList} )
      .then ( () => {
        this.setState({ 
          title: '', toDoList: [...this.state.toDoList, this.state.title]
        })
        this.getAllTitles();
      })
      .catch( (err) => console.log(err) )   
  }


  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };




  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1> To do list</h1>
        
          <form onSubmit={this.handleSubmit}>

            <input type="text"
            name="title"
            value={this.state.title}
            onChange={ (e) => this.handleChange(e) } />
            <button>Add to list</button>
          
          </form>

          <div>
            {
              this.state.toDoList.map( (toDoItem) => {
                return (
                  <div key={toDoItem._id} className="to-do-item">
                    <h3>{toDoItem.title}</h3>
                    <button onClick={ () => this.deleteListItem()}>Delete Item</button>
                  </div>
                )
              })
            }

          </div>

        </header>
      </div>
    );
  }
}

export default App;
