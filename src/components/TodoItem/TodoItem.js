import React from 'react';
import s from './TodoItem.module.css';
import T from 'prop-types';
import cx from 'classnames/bind';


const classes = cx.bind(s);

const TodoItem = ({
    title,
    id,
    completed,
    onClick,
    onRemoveClick}) => {

    const classCompleted = classes('container', {completed})
    return(
    <div className={classCompleted}>
        <div className={s.textStyle} onClick={() => onClick(id)}><h3>{title}</h3></div>
        <button className={s.btn} onClick={() => onRemoveClick(id)}>&#10006;</button>
    </div>
)};



TodoItem.propsTypes = {
    title: T.string,
    id: T.func,
    completed: T.bool,
    onClick: T.func,
}

export default TodoItem;