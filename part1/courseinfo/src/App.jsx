const Header = (props) =>{
  return(
    <h1>{props.cn}</h1>
  )
}

const Part = (props) =>{
  return(
   <p>
    {props.n} {props.ex}
   </p> 
  )
}

 const Content = (props) =>{
  return(
    <div>
      <Part n={props.parts[0].name} ex={props.parts[0].exercises} />
      <Part n={props.parts[1].name} ex={props.parts[1].exercises} />
      <Part n={props.parts[2].name} ex={props.parts[2].exercises} />
    </div>
  )
}

const Total = (props) =>{
  return(
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  console.log(course)

  return (
    <div>
      <Header cn={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default App


