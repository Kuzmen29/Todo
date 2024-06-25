import {api} from "./api";
import {ITodoItem} from "../../types/todoItem.type";


const todosApi = api.injectEndpoints({

    endpoints : (build) => ({
        getItemsFromDB: build.query({
            query: () => 'todos',
            transformResponse(response: any) {
                return response.data
            },
            providesTags: ['TODOS']
        }),
        addItemsToDB: build.mutation({
            query: (body: ITodoItem) => {
                return {
                    url: 'todos',
                    method: 'POST',
                    body
                }
            },

            invalidatesTags: ['TODOS'],
        }),
        removeItemInDB: build.mutation({
            query: (body: { id: string }) => ({
                url: 'todos',
                method: 'DELETE',
                body
            }),
            invalidatesTags: ['TODOS']
        }),
        updateItemInDB: build.mutation({
            query: (body: ITodoItem) => {
                return {
                    url: 'todos',
                    method: 'PATCH',
                    body
                }
            },
            invalidatesTags: ['TODOS']
        }),
    })
})

export const {
    useGetItemsFromDBQuery,
    useAddItemsToDBMutation,
    useRemoveItemInDBMutation,
    useUpdateItemInDBMutation,
} = todosApi;