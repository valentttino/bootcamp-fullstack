import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = (props) =>{
    return(
        <div>
            <Header cn={props.course.name} />
            <Content partscol={props.course.parts} />
            <Total nex={props.course.parts} />
        </div>
    )
}


export default Course