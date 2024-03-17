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

const AllStatistics = (props) =>{
  const g = props.good
  const n = props.neutral
  const b = props.bad
  const ac = props.allComents

  return(
    <>
    <BtnStcs text={"good"} value={g} />
    <BtnStcs text={"neutral"} value={n} />
    <BtnStcs text={"bad"} value={b} />
      
    <TotalComents ac={ac} />
    <AvgComments bad={b} a={ac} g={g} />
    <PositiveComments g={g} a={ac} />
      </>
  )
}

const IsFeedbackZero = (props) =>{
  if (props.ac === 0) {
    return(
    <p>
      No feedback given
    </p>
    )
  }else{
    return(
    <AllStatistics good={props.g} neutral={props.n} bad={props.b} allComents={props.ac} /> 
    )
  }
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

    <IsFeedbackZero ac={allComents} g={good} n={neutral} b={bad} />
    </>
  )
}

export default App