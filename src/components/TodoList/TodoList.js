import React, { Component } from 'react';
import s from './TodoList.module.css';
import T from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';


const TodoList = ({
    items,
    onTodoClick,
    onTodoRemoveClick,
}) => (
    <ul>
        {items.map(item => (
            <TodoItem
                onRemoveClick={onTodoRemoveClick}
                onClick={onTodoClick}
                key={item.id}
                {...item}
            />
        ))}
    </ul>
);


TodoList.propsType = {
    items: T.array,
    onTodoClick: T.func,
    onTodoRemoveClick: T.func,
}

export default TodoList;