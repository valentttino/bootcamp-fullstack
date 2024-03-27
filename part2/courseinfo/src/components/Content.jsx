import Total from "./Total"

const Content = ({partsc=[]}) => {
  return (
    <>
      {partsc.map(x => {
        return (
          <div key={x.id}>
            <h2>
              {x.name}
            </h2>
            {x.parts.map(y => {
              return (
                <p key={y.id}>
                  {y.name}: {y.exercises}
                </p>
              )
            })}
            <Total parts={x.parts} />
          </div>
        )
      })}
    </>
  )
}


export default Content

