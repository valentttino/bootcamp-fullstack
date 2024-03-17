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
    <h2>
      Statistics 
    </h2>
    <BtnStcs text={"good"} value={g} />
    <BtnStcs text={"neutral"} value={n} />
    <BtnStcs text={"bad"} value={b} />
    
    <TotalComents ac={ac} />
    <AvgComments bad={b} a={ac} g={g} />
    <PositiveComments g={g} a={ac} />

    </>
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
    
    <AllStatistics good={good} neutral={neutral} bad={bad} allComents={allComents} />

    </>
  )
}

export default App