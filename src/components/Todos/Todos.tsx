import React, {FC} from 'react';

import {useAppSelector} from "../../hooks/redux-hooks";
import Todo from "../Todo/Todo";
import './todos.modules.scss'

const Todos: FC = () => {

    const {todos} = useAppSelector(state => state.todoReducer);

    const todoCompleted = todos.filter(todo => todo.todoStatus === true);

    return (
        <div className={'todos-block-elements'}>
            <div className={'todo-numbers'}>
                <span>All: {todos.length} Completed: {todoCompleted.length}</span>
            </div>
            <div>
                {todos && todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
            </div>
        </div>
    );
};

export default Todos;