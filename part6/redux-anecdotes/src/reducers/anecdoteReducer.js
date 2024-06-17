import { createSlice } from "@reduxjs/toolkit"

import anecdoteService from '../services/anecdotes.js'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      if (anecdoteToChange){ 
        anecdoteToChange.votes = anecdoteToChange.votes + 1
      }  
    },
    addAnecdote(state,action){
      state.push(action.payload)
    },
    setAnecdotes(state, action){
      return action.payload
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    }
  }
})

export const initializeAnecdotes = () =>{
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content =>{
  return async dispatch =>{
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const {voteAnecdote, addAnecdote, setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export default anecdoteSlice.reducer