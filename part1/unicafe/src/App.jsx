import { useState } from 'react'

const Btn = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const BtnStcs = (props) => {
  return(
    <p>
      {props.text}: {props.value}
    </p>
  )
}

const TotalComents = (props) =>{
  return(
    <p>
      all: {props.ac}
    </p>
  )
}

const AvgComments = (props) =>{
  const b = props.bad * (-1)
  console.log('bad number * -1:', b)
  return(
    <p>
      average: {(props.g + b)/props.a}
    </p>
  )
}

const PositiveComments = (props) =>{
  return(
    <p>
      positive: {(props.g*100)/props.a}%
    </p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allComents, setAll] = useState(0)

  const goodClick = () =>{
    setAll(allComents+1)
    setGood(good+1)
  }

  const neutralClick = () =>{
    setAll(allComents+1)
    setNeutral(neutral+1)
  }

  const badClick = () =>{
    setAll(allComents+1)
    setBad(bad+1)
  }

  return (
    <>
    <h1>
      Give feedback!
    </h1>
    <Btn onClick={()=>goodClick()} text={"good"} />

    <Btn onClick={()=>neutralClick()} text={"neutral"} />

    <Btn onClick={()=>badClick()} text={"bad"} />
    
    <h2>
      Statistics
    </h2>

    <BtnStcs text={"good"} value={good} />
    <BtnStcs text={"neutral"} value={neutral} />
    <BtnStcs text={"bad"} value={bad} />
    
    <TotalComents ac={allComents} />
    <AvgComments bad={bad} a={allComents} g={good} />
    <PositiveComments g={good} a={allComents} />

    </>
  )
}

export default App