import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


export const accountApi = createApi({
    reducerPath: 'api/auth',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/auth',
    }),
    endpoints: (build) => ({
        token: build.mutation<{ access_token: string, username: string }, { login: string, password: string }>({
            query: (form) => ({
                url: 'token?Login='+form.login+'&Password='+form.password,
                method: 'POST'
            })
        }),
        registration: build.mutation<{ access_token: string, username: string }, { login: string, password: string }>({
            query: (form) => ({
                url: `registration&NickName={form.login}&Password={form.password}`,
                method: 'POST'
            })
        }),
    })

})

export const { useTokenMutation, useRegistrationMutation } = accountApi