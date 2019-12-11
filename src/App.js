import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Hit the gym'},
      {id: 3, content: 'Pay bills'},
      {id: 4, content: 'Buy eggs'},
      {id: 5, content: 'Read a book'},
      {id: 6, content: 'Play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    });
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <div class="header" >
        <h1 className="center white-text margin:5px" >My Todo List</h1>
          <AddTodo  addTodo ={this.addTodo} />
        </div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default App;