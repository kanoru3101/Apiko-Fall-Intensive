import React from 'react';
import T from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';


const TodoList = ({
    items,
    onTodoClick,
    onTodoRemoveClick,
    match,
}) => (


    <ul>
        {items.map(item => {
                return( <TodoItem
                    onRemoveClick={onTodoRemoveClick}
                    onClick={onTodoClick}
                    match={match}
                    key={item.id}
                    {...item}
                />)

            }

        )}
    </ul>
);


TodoList.propsType = {
    items: T.array,
    onTodoClick: T.func,
    onTodoRemoveClick: T.func,
}

export default TodoList;