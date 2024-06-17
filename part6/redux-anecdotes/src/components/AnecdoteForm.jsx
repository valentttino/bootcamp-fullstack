import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer.js"
import { setCreateNotification } from "../reducers/notificationReducer.js"
import anecdoteService from '../services/anecdotes.js'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = async event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newAnecdote))
    dispatch(setCreateNotification(content))
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm