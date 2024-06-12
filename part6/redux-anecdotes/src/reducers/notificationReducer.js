import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const notificationSlice = createSlice({
    name:'notifications',
    initialState,
    reducers:{
        setVoteNotification(state, action){
            return ('you voted: ' + action.payload)
        },
        setCreateNotification(state, action){
            return('you add: '+ action.payload)
        }
    }
})


export const {setVoteNotification, setCreateNotification} = notificationSlice.actions
export default notificationSlice.reducer