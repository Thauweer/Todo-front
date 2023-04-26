import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITodo } from "@/interfaces/ITodo";
import { IImportance } from "@/interfaces/IImportance.enum";

const initialTodo: ITodo = {
    id: 0,
    title: '',
    description: '',
    color: '',
    time: 0,
    planned_time: '',
    category: '',
    importance: [IImportance.Secondary]
}

const initialUser = {
    isAuthorized: !!localStorage.getItem("token"),
    photoLink: '',
    token: localStorage.getItem("token"),
    name: localStorage.getItem("name"),
    login: '',
    password: ''
}

const initialState = {
    showTodoModal: false,
    todoModalOption: 0, // 0 - create todo, 1 - update todo
    showAuthModal: false,
    todoModal: initialTodo,
    user: initialUser
}

const appSlice = createSlice({
    name: 'app',
    initialState: initialState,
    reducers: {
        toggleShowCreateTodoModal: (state) => {
            state.showTodoModal = !state.showTodoModal
        },
        toggleShowUpdateTodoModal: (state) => {
            state.showTodoModal = !state.showTodoModal
            state.todoModalOption = 1
        },
        closeTodoModal: (state) => {
            state.showTodoModal = false
            state.todoModal = initialTodo
            state.todoModalOption = 0
        },
        toggleShowAuth: (state) => {
            state.showAuthModal = 
            !state.showAuthModal
        },
        setTitleTodo: (state, action: PayloadAction<string>) => {
            state.todoModal.title = action.payload
        },
        setDescTodo: (state, action: PayloadAction<string>) => {
            state.todoModal.description = action.payload
        },
        setColorTodo: (state, action: PayloadAction<string>) => {
            state.todoModal.color = action.payload
        },
        setPlannedTimeTodo: (state, action: PayloadAction<string>) => {
            state.todoModal.planned_time = action.payload
        },
        setTimeTodo: (state, action: PayloadAction<number>) => {
            state.todoModal.time = action.payload
        },
        setId: (state, action: PayloadAction<number>) => {
            state.todoModal.id = action.payload
        },
        setLogin: (state, action: PayloadAction<string>) => {
            state.user.login = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.user.password = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.user.token = action.payload
            localStorage.setItem("token", action.payload)
            state.user.isAuthorized = true
        },
        setName: (state, action: PayloadAction<string>) => {
            state.user.name = action.payload
            localStorage.setItem("name", action.payload)
        },
        setTodo: (state, action: PayloadAction<ITodo>) =>{
            state.todoModal = action.payload
        },
        logout: (state) => {
            state.user.isAuthorized = false
            localStorage.removeItem("token")
            localStorage.removeItem("name")
        },
        clearLoginAndPassword: (state) => {
            state.user.login = ''
            state.user.password = ''
        },
        clearTodoModal: (state) => {
            state.todoModal = initialState.todoModal
        },
    }
})

export const appReducer = appSlice.reducer
export const appActions = appSlice.actions
