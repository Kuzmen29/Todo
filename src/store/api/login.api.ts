import {api} from "./api";


const loginApi = api.injectEndpoints({
    endpoints : (build)=> ({
        login : build.mutation({
            query : (body: {nickname:string, password : string})=> ({
                url : 'login',
                method : 'POST',
                body
            }),
            transformResponse : (response:any) => response.data
        })
    })
})

export const {
    useLoginMutation
} = loginApi;