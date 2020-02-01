import React from 'react';
import TodoItem from './todoItem';

export default function taskList({tasks}) {
    return (
        <div className="list">
            {tasks && tasks.map(item => <TodoItem key ={item.id} {...item}/>)}
        </div>
    )
};