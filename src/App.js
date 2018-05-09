import React, { Component } from 'react';
import {v4} from 'uuid';
import todoList from './todoList';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todoList(10),
      newTodo: "",
      edit: {
        status: false,
        id: "",
        title: ""
      }
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.checkboxClick = this.checkboxClick.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.changeNewTodoValue = this.changeNewTodoValue.bind(this)
    this.changeEditedValue = this.changeEditedValue.bind(this)
    this.doneEdit = this.doneEdit.bind(this)
  }
  changeNewTodoValue(e) {
    this.setState({
      newTodo: e.target.value
    })
  }
  addTodo(e) {
    e.preventDefault();
    if(this.state.newTodo !== "") {
      const newObj = Object.assign({},this.state.todos);
      newObj[v4()] = {
        title: this.state.newTodo,
        done: false
      }
      this.setState({
        todos: newObj,
        newTodo: ""
      })
    }
  }
  deleteTodo(id) {
    const newObj = Object.assign({}, this.state.todos);
    delete newObj[id];
    this.setState({
      todos: newObj
    });
  }
  editTodo(id) {
    let selectedTitle = this.state.todos[id].title
    this.setState({
      edit: {
              status: true,
              title: selectedTitle,
              id: id
            }
    });
  }
  doneEdit(e) {
    e.preventDefault();
    const newObj = Object.assign({}, this.state.todos);
    newObj[this.state.edit.id].title = this.state.edit.title;
    this.setState({
      todos: newObj,
      edit: {
        status: false
      }
    })
  }
  changeEditedValue(e) {
    this.setState({
      edit: {...this.state.edit, title: e.target.value}
    });
  }
  checkboxClick(id) {
    const newObj = Object.assign({}, this.state.todos);
    newObj[id].done = !this.state.todos[id].done
    this.setState({
      todos: newObj
    });
  }
  render() {
    return (
      <div>
        <AddTodo
          submitHandler={this.addTodo}
          changeHandler={this.changeNewTodoValue}
          newTodo={this.state.newTodo}
        />
        <ul className="todo-list">
          {Object.keys(this.state.todos).map((key) => (
            <TodoItem 
              key={key}
              id={key}
              done={this.state.todos[key].done}
              title={this.state.todos[key].title}
              deleteHandler={this.deleteTodo}
              editHandler={this.editTodo}
              checkboxHandler={this.checkboxClick}
            />))}
        </ul>
        {this.state.edit.status && 
          <EditTodo
            title={this.state.edit.title} 
            changeHandler={this.changeEditedValue}
            submitHandler={this.doneEdit}
          />}
      </div>
    );
  }
}

export default App;
