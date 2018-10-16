import React, { Component } from 'react';
import logo from './logo.svg';
import s from './App.module.css';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList'
import {createToto} from "./utils/creators";
import Filters from './components/Filters/Filters'


class App extends Component {
  constructor(props){
    super(props)


      // load localStorage
      const localStorageData = localStorage.getItem("todos");

      this.state = {
          inputValue: "",
          filter: "all",
          todos: localStorageData ? JSON.parse(localStorage.getItem("todos")) : [],
      };


        this._inputRef = React.createRef();
        this.onChangeInputText = this.onChangeInputText.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.handleRemoveTodoClick = this.handleRemoveTodoClick.bind(this);
        this.getCountComplited = this.getCountComplited.bind(this);
        this.handleShowFilter = this.handleShowFilter.bind(this)
        this.handeTodoItems = this.handeTodoItems.bind(this)
  }



  onChangeInputText(inputValue){
    this.setState({inputValue})
  }


  handleAddTodo(){

    const {inputValue} = this.state;

    if (inputValue.trim().length > 0){
        const todo = createToto(this.state.inputValue);
        this.setState({
            inputValue: '',
            todos: [todo].concat(this.state.todos),
            filter: "all"
        });

    }

    this._inputRef.current.focus();
  }

  handleTodoClick(id){
      const currentTodoIndex = this.state.todos.findIndex(i => i.id === id);
      if (currentTodoIndex === -1){
          return;
      }

      const todo = {...this.state.todos[currentTodoIndex]};
      todo.completed = !todo.completed;
      const newTodos = [...this.state.todos];
      newTodos[currentTodoIndex] = todo;

      this.setState({
          todos: newTodos,
      });
  }


  handleRemoveTodoClick(id){
      this.setState({
          todos: this.state.todos.filter(i => i.id !== id)
      });
  }


  getCountComplited(){
      return this.state.todos.filter(item => item.completed).length;
  }


  componentDidUpdate(){
      if (this.state.todos.length > 0){
          localStorage.setItem("todos", JSON.stringify(this.state.todos));
      }

  }


  handleShowFilter(filter){
      this.setState({filter})
  }


  handeTodoItems(){
      if (this.state.filter === "all") return this.state.todos
      if(this.state.filter === "completed") return this.state.todos.filter(i => i.completed === true)
      if(this.state.filter === "not completed")return this.state.todos.filter(i => i.completed === false)

  }


  render() {
    return (
      <div className={s.App}>
          <div className={s.container}>
              <Header
                  inputRef = {this._inputRef}
                  value={this.state.inputValue}
                  onChangeText={this.onChangeInputText}
                  onClick={this.handleAddTodo}
              />
              <Filters
                  changeFilter = {this.handleShowFilter}
              />

              <TodoList
                  items = {this.handeTodoItems()}
                  onTodoClick={this.handleTodoClick}
                  onTodoRemoveClick={this.handleRemoveTodoClick}
                  filterTodo = {this.state.filter}
              />

          </div>


      </div>
    );
  }
}

export default App;
