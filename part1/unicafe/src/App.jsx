import { useState } from 'react'

const Btn = (props) =>{
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return(
    <td>
      {props.text} {props.value}
    </td>
  )
}

const TotalComents = (props) =>{
  return(
    <td>
      all: {props.ac}
    </td>
  )
}

const AvgComments = (props) =>{
  const b = props.bad * (-1)
  console.log('bad number * -1:', b)
  return(
    <td>
      average: {(props.g + b)/props.a}
    </td>
  )
}

const PositiveComments = (props) =>{
  return(
    <td>
      positive: {(props.g*100)/props.a}%
    </td>
  )
}

const AllStatistics = (props) =>{
  const g = props.good
  const n = props.neutral
  const b = props.bad
  const ac = props.allComents

  return(
    <table>
      <tbody>
        <tr>
          <StatisticLine text={"good"} value={g} />
        </tr>
        <tr>
          <StatisticLine text={"neutral"} value={n} />
        </tr>
        <tr>
          <StatisticLine text={"bad"} value={b} />
        </tr>
        <tr>
          <TotalComents ac={ac} />
        </tr>
        <tr>
          <AvgComments bad={b} a={ac} g={g} />
        </tr>
        <tr>
          <PositiveComments g={g} a={ac} />
        </tr>
      </tbody>
    </table>
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