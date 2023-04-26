import {configureStore} from '@reduxjs/toolkit'
import { todoReducer } from './slices/todosSlice'
import { appReducer } from './slices/appSlice'

import { accountApi } from './api/account.api'
import { todoApi } from './api/todo.api'

export const store = configureStore({
    reducer: {
        todos : todoReducer,
        app: appReducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [todoApi.reducerPath]: todoApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(accountApi.middleware, todoApi.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>