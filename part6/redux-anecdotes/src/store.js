import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer.js'

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer
    }
})

console.log(store.getState())

export default store