import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ITodo} from "../../interfaces/todo.interface";
import {addTodo} from "../../store/slice/todo.slice";
import {useAppDispatch} from "../../hooks/redux-hooks";
import {todoFormValidation} from "../../validation/todo.form.validation";
import './form.todo.modules.scss'

const FormTodo: FC = () => {

    const {reset, register, handleSubmit, formState: {errors}} = useForm<ITodo>({
        resolver: joiResolver(todoFormValidation),
        mode: 'onTouched'
    });

    const dispatch = useAppDispatch();

    const submit = (todo: ITodo) => {
        dispatch(addTodo(todo));
        reset();
    };

    return (
        <div className={'form-element-block'}>
            <form onSubmit={handleSubmit(submit)}>
                {errors.todoName && <span className={'form-errors-msg'}>{errors.todoName.message}</span>}
                <div><input type="text" placeholder={'What will you do ?'} {...register('todoName')}/>
                    <button>send</button>
                </div>
            </form>
        </div>
    );
};

export default FormTodo;