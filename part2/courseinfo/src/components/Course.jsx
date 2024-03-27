import Header from "./Header"
import Content from "./Content"

const Course = (props) =>{
    return(
        <div>
            <Header />
            <Content partsc={props.course} />
        </div>
    )
}


export default Course