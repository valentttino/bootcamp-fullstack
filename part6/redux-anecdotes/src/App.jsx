import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, createAnecdote } from './reducers/anecdoteReducer.js'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const anecdotesSort = anecdotes.sort( (a,b) => {
    if(a.votes < b.votes){
      return 1
    }
    if(a.votes > b.votes){
      return -1
    }
    return 0
  })

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    console.log('vote', id)
  }

  const addAnecdote = event => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotesSort.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App