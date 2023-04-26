import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../../interfaces/ITodo";

export const todoApi = createApi({
    reducerPath: 'api/todo',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/todo',
        headers: {
            "authorization": "Bearer " + localStorage.getItem('token')
        }
    }),
    endpoints: (build) => ({
        getAllTodo: build.mutation<ITodo[], any>({ query: () => 'getall' }),
        createTodo: build.mutation<ITodo, ITodo>({
            query: (todo) => ({
                url: `create`,
                method: "POST",
                body: todo
            })
        }),
        updateTodo: build.mutation<string, ITodo>({
            query: (todo) => ({
                url: `update?id=${todo.id}`,
                method: "PUT",
                body: todo
            })
        }),
        deleteTodo: build.mutation<string, number>({
            query: (id) => ({
                url: `delete?id=${id}`,
                method: "DELETE"
            })
        })
    }),
})

export const { useGetAllTodoMutation,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation } = todoApi