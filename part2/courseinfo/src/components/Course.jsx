import Header from "./Header"
import Content from "./Content"

const Course = (props) =>{
    console.log('props: ',props);
    return(
        <div>
            <Header cn={props.course.name} />
            <Content partscol={props.course.parts} />
        </div>
    )
}


export default Course