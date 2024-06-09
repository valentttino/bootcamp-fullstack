import { useState } from "react"
import blogService from '../services/blogs'

const Blog = ({ blog }) => {
  const [blogsDetailsVisible, setBlogsDetailsVisible] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

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

  const handleLikes = async () => {
    const updatedBlog = {
      ...blog, likes: likes + 1
    } 

    const returnedBlog = await blogService.update(blog.id, updatedBlog)
    setLikes(returnedBlog.likes)
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
        likes {likes} <button onClick={handleLikes}>like</button> <br />
        {blog.author} <br />
      </div>
  </div>
  )
}

export default Blog