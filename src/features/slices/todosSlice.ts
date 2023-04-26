import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ITodo } from '@/interfaces/ITodo'

const initialState : {todos: Array<ITodo>, count : number}  = {
    todos: [],
    count: 1
}


const todoSlice = createSlice({
    name : 'todos',
    initialState: initialState,
    reducers : {
        addTodo : (state, action : PayloadAction<ITodo>) =>{
            state.todos.push(action.payload)
            console.log(state.count);
            state.count = state.count + 1      
        },
        updateTodo : (state, action : PayloadAction<[number, ITodo]>) =>{
            state.todos.filter(todo => todo.id === action.payload[0])
            state.todos[action.payload[0]] = action.payload[1]
        },
        delTodo : (state, action : PayloadAction<number>) =>{
            state.todos =  state.todos.filter(todo => todo.id !== action.payload)         
        }
    }
})

export const todoActions = todoSlice.actions
export const todoReducer = todoSlice.reducer