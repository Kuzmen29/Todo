import {api} from "./api";

const friendApi = api.injectEndpoints({
    endpoints: build => ({
        addFriend : build.mutation({
            query : (body:{userID:string, newFriendID:string})=> ({
                url : 'friend',
                method : 'PUT',
                body
            })
        })
    })
})

export const {
    useAddFriendMutation
} = friendApi;