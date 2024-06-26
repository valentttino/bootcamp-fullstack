import { useSelector, useDispatch } from 'react-redux'
import { setVoteNotification } from '../reducers/notificationReducer.js'
import { putVoteInAnecdote } from '../reducers/anecdoteReducer.js'

const AnecdoteList = () =>{
    const dispatch = useDispatch()

    const anecdotes = useSelector(state => {
        const anecdotesFiltered = state.filter !== ''
            ? state.anecdotes.filter(a => a.content.includes(state.filter))
            : state.anecdotes
        return anecdotesFiltered
        }    
    )

    const anecdotesSort = [...anecdotes].sort( (a,b) => {
        if(a.votes < b.votes){
          return 1
        }
        if(a.votes > b.votes){
          return -1
        }
        return 0
      })

    const vote = async (id, content) => {
        dispatch(putVoteInAnecdote(id))
        dispatch(setVoteNotification(content))
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
                    <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList