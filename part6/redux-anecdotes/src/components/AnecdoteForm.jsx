import { useDispatch } from "react-redux"
import { setCreateNotification } from "../reducers/notificationReducer.js"
import { createAnecdote } from "../reducers/anecdoteReducer.js"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setCreateNotification(content))
  }

  return(
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm