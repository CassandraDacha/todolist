import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo

    this.props.addTodo(this.state);
    this.setState({
      content: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
           <input type = "text" placeholder="Add new todo:" onChange ={this.handleChange} value={this.state.content}/> 
          <span onClick = {this.handleSubmit} class="addBtn">Add Task</span>
        </form>
      </div>
    )
  }
}

export default AddTodo