import React, {FC} from 'react';

import {ITodo} from "../../interfaces/todo.interface";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {delTodo, changeStatus} from "../../store/slice/todo.slice";
import './todo.modules.scss';

const Todo: FC<{ todo: ITodo; }> = ({todo: {id, todoName, todoStatus}}) => {

    const dispatch = useAppDispatch();

    return (
        <div className={'todo-block-element'}>
            <input type="checkbox" value={todoStatus} onChange={() => dispatch(changeStatus(id))}/>
            <div className={todoStatus ? 'completed' : ''}>name: {todoName}</div>
            <button onClick={() => dispatch(delTodo(id))}>delete</button>
        </div>
    );
};

export default Todo;