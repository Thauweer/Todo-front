import {configureStore} from '@reduxjs/toolkit'
import { todoReducer } from './slices/todosSlice'
import { appReducer } from './slices/appSlice'

import { todoApi } from './api/todo.api'

export const store = configureStore({
    reducer: {
        todos : todoReducer,
        app: appReducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(todoApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>
