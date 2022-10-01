import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo} from "../../interfaces/todo.interface";

interface IState {
    todos: ITodo[];
}

const initialState: IState = {
    todos: [],
};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push({...action.payload, id: Math.round(Math.random() * 1000000) , todoStatus: false});
        },
        delTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        changeStatus: (state, action: PayloadAction<number>) => {
            const find = state.todos.find(todo => todo.id === action.payload);
            // @ts-ignore
            find.todoStatus = !find.todoStatus;
        },
    }
})

export const todoReducer = todoSlice.reducer;

export const {addTodo, delTodo, changeStatus} = todoSlice.actions;