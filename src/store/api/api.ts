import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const url = 'http://localhost:3010/todo/';

export const api = createApi({
    reducerPath: 'ToDo',
    tagTypes: ['TODOS'],
    baseQuery: fetchBaseQuery(
        {baseUrl: url}),
    endpoints: (builder) => ({
        getUser: builder.mutation({
            query: (body: { id: string }) => {
                return {
                    url: 'user',
                    method: 'POST',
                    body
                }
            },
        }),
        checkUser: builder.mutation({
            query: (body: { nickname: string }) => {
                return {
                    url: 'user-nickname',
                    method: 'POST',
                    body
                }
            },
            transformResponse(response: any) {
                return response.data
            },
        }),
        addUser : builder.mutation({
            query: (body: any) => {
                return {
                    url: 'user',
                    method: 'PUT',
                    body
                }
            },
            transformResponse(response: any) {
                console.log(response)
                return response.data
            },
        })
    })
})
export const {
    useGetUserMutation,
    useCheckUserMutation,
    useAddUserMutation
} = api;