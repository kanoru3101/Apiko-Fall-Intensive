import React, { Component } from 'react';
import s from './TodoApp.module.css';
import Header from './Header/Header';
import TodoList from './TodoList/TodoList'
import {createToto} from "../../utils/creators";
import Filters from './Filters/Filters';
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from "../Pages/No Match/NoMatch";


class TodoApp extends Component {
    constructor(props){
        super(props)

        // load localStorage
        const localStorageData = localStorage.getItem("todos");

        this.state = {
            inputValue: "",
            filter: "all",
            todos: localStorageData ? JSON.parse(localStorage.getItem("todos")) : [],
            match: props.match,
        };


        this._inputRef = React.createRef();
        this.onChangeInputText = this.onChangeInputText.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleTodoClick = this.handleTodoClick.bind(this);
        this.handleRemoveTodoClick = this.handleRemoveTodoClick.bind(this);

        this.handleShowFilter = this.handleShowFilter.bind(this)
        this.handleTodoItems = this.handleTodoItems.bind(this)
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



    componentDidUpdate(){
        if (this.state.todos.length > 0){
            localStorage.setItem("todos", JSON.stringify(this.state.todos));
        }

    }


    handleShowFilter(filter, match){
        this.setState({
            filter,
            match:  match
        })
    }


    handleTodoItems(pathLink){
        if(pathLink === "/Todo/") return this.state.todos;
        if(pathLink === "/Todo/completed") return this.state.todos.filter(i => i.completed === true);
        if(pathLink === "/Todo/notCompleted")return this.state.todos.filter(i => i.completed === false);

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
                        match={this.state.match}
                    />
                    <Filters
                        changeFilter = {this.handleShowFilter}
                        match={this.state.match}
                    />


                    <Switch>
                        <Route
                            exact path={this.state.match.path}
                            render={()=>(
                                <TodoList
                                    items = {this.state.todos}
                                    onTodoClick={this.handleTodoClick}
                                    onTodoRemoveClick={this.handleRemoveTodoClick}
                                    match={this.state.match}
                                />)
                            }
                        />

                        <Route path={this.state.match.path + '/completed'} render={() =>{
                            return(<TodoList
                                items = {this.handleTodoItems(this.state.match.path + '/completed')}
                                onTodoClick={this.handleTodoClick}
                                onTodoRemoveClick={this.handleRemoveTodoClick}
                                match={this.state.match}
                            />)
                            }
                        }/>

                        <Route path={this.state.match.path + '/notCompleted'} render={() =>{
                            return(<TodoList
                                items = {this.handleTodoItems(this.state.match.path + '/notCompleted')}
                                onTodoClick={this.handleTodoClick}
                                onTodoRemoveClick={this.handleRemoveTodoClick}
                                match={this.state.match}
                            />)
                            }
                        }
                        />

                        <Route
                            exact path={this.state.match.path + '/add'}
                            render={() => (<Redirect to={this.state.match.path + "/"} />)
                                }
                        />

                        <Route
                            exact path={this.state.match.path + '/all'}
                            render={() => (<Redirect to={this.state.match.path + "/"} />)
                            }
                        />

                    </Switch>



                </div>


            </div>
        );
    }
}

export default TodoApp;
