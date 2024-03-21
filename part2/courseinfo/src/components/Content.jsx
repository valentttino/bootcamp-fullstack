const Content = (props) =>{
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

