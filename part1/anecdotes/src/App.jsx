import { useState } from 'react'

const AnecdoteWMV = (props) =>{
  let anec = props.anecdotes
  let pts = props.points
  console.log('Anecdotes:', anec)
  console.log('Pts:', pts)

  let bestanec = ''
  let maxpoints = 0
  for (let i=0, j=1; i<8 && j<8; i++, j++){
    if ((pts[i]>pts[j]) && (pts[i]>maxpoints)){
      maxpoints = pts[i]
      bestanec = anec[i]
      console.log('Max points:', maxpoints)
      console.log('best anec:',bestanec)
    }
  }
  return(
    <>
      <p>
        {bestanec}
      </p>
      <p>
        Has: {maxpoints} votes!
      </p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0})

  function randomInt(max) {
    return Math.floor(Math.random() * max)
  }

  const voteAnecdote = (number) =>{
    const copy = {
      ...points,
      [number]: points[number] + 1
    }
    setPoints(copy)
  }

  console.log('selected Value:', selected)
  console.log('points:',points)

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      {anecdotes[selected]}
      <br />
      <button onClick={() => setSelected(randomInt(8))}>
       next anecdote
      </button>
      <button onClick={() => voteAnecdote(selected)}>
        vote
      </button>

      <h2>
        Anecdote whit most votes
      </h2>
      <AnecdoteWMV anecdotes={anecdotes} points={points} />
    </div>
  )
}

export default App