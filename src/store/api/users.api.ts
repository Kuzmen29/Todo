import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {api} from "./api";

const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.mutation({
            query: (body: {search : string}) => {
                return {
                    url: 'users',
                    method: 'POST',
                    body
                }
            },
            transformResponse(response: any){
                return response.data
            }
        })
    })
})

export const {
    useGetUsersMutation
} = usersApi;

