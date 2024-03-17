import { useState } from 'react'

const Btn = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Stcs = (props) => {
  return(
    <p>
      {props.text}: {props.value}
    </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <h1>
      Give feedback!
    </h1>
    <Btn onClick={()=> setGood(good+1)} text={"good"} />

    <Btn onClick={()=> setNeutral(neutral+1)} text={"neutral"} />

    <Btn onClick={()=> setBad(bad+1)} text={"bad"} />
    
    <h2>
      Statistics
    </h2>

    <Stcs text={"good"} value={good} />
    <Stcs text={"neutral"} value={neutral} />
    <Stcs text={"bad"} value={bad} />
    </>
  )
}

export default App