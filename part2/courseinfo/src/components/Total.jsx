const Total = (props) =>{
const arrayOfExs = props.nex

const sumWithInitial = arrayOfExs.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises, 
    0 
    )

return(
    <p>
        <strong>Total of {sumWithInitial} exercises</strong>
    </p>
)}

export default Total