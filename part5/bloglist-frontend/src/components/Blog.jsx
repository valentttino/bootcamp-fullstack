import { useState } from "react"

const Blog = ({ blog }) => {
  const [blogsDetailsVisible, setBlogsDetailsVisible] = useState(false)

  const hideWhenVisible = {
    display: blogsDetailsVisible ? 'none' : '',
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  
  const showWhenVisible = {
    display: blogsDetailsVisible? '' : 'none', 
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  } 

  return(
    <div>
      <div style={hideWhenVisible}>
        {blog.title} 
        <button onClick={() => setBlogsDetailsVisible(true)}>view</button>
      </div>

      <div style={showWhenVisible}>
        {blog.title}
        <button onClick={() => setBlogsDetailsVisible(false)}>hide</button> <br />
        {blog.url} <br /> 
        likes {blog.likes} <button>like</button> <br />
        {blog.author} <br />
      </div>
  </div>
  )
}

export default Blog