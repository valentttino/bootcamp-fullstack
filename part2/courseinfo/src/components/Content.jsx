/* import Part from "./Part" */

const Content = (props) =>{
    console.log('props in content: ',props)
    console.log('typeof props in content: ', typeof props);
    console.log('props.partscol: ', props.partscol);
    console.log('typeof props.partscol: ', typeof props.partscol);
    return(
      <>
        {props.partscol.map(partscol =>
        <p key={partscol.id}>
                {partscol.name}: {partscol.exercises}
         </p>       
            )}
      </>
    )
  }

  export default Content

{/* <Part n={props.parts[0].name} ex={props.parts[0].exercises} />
<Part n={props.parts[1].name} ex={props.parts[1].exercises} />
<Part n={props.parts[2].name} ex={props.parts[2].exercises} /> */}