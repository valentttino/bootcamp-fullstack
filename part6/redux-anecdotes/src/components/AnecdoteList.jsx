import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer.js'

const AnecdoteList = () =>{
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

    return(
        <div>
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
        </div>
    )
}

export default AnecdoteList