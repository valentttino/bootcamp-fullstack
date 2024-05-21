import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)

  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogAuthor, setNewBlogAuthor] = useState('')
  const [newBlogUrl, setNewBlogUrl] = useState('')

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(()=> {
    const loggedUserJSON = window.localStorage.getItem('loggedBloglistAppUser')
    if (loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const addBlog = (event) => {
    event.preventDefault()
    const blogObject = {
      title: newBlogTitle,
      author: newBlogAuthor,
      url: newBlogUrl,
    }

    blogService
      .create(blogObject)
        .then(returnedBlog => {
          setBlogs(blogs.concat(returnedBlog))
          setNotificationMessage(`a new blog ${newBlogTitle} by ${newBlogAuthor} added`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
          setNewBlogTitle('')
          setNewBlogUrl('')
          setNewBlogAuthor('')
        })
  }

  const handleTitleChange = (event) => {
    setNewBlogTitle(event.target.value)
  }

  const handleAuthorChange = (event) =>{
    setNewBlogAuthor(event.target.value)
  }

  const handleUrlChange = (event) =>{
    setNewBlogUrl(event.target.value)
  }

  const handleLogin = async (event) =>{
    event.preventDefault()
    console.log('loggin in with', username, password) // admin admin

    try{
      const user = await loginService.login({username, password})

      window.localStorage.setItem('loggedBloglistAppUser', JSON.stringify(user))

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception){
      setNotificationMessage('wrong credentials')
      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
    }
  }

  const logoutAction = () =>{
    window.localStorage.removeItem('loggedBloglistAppUser')
    setUser(null)
  }

  const loginForm = () => (
    <>
    <h2>Log in to application</h2>
    <form onSubmit={handleLogin}>
        <div>
          username
          <input
          type='text'
          value={username}
          name='Username'
          onChange={({target}) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
          type='password'
          value={password}
          name='Password'
          onChange={({target}) => setPassword(target.value)}
          />
        </div>
        <button type='submit'>login</button>
      </form>
    </>
  )

  const addBlogForm = () =>(
    <>
    <h2>create new</h2>
    <form onSubmit={addBlog}>
      <div>
        title
        <input
        value={newBlogTitle}
        onChange={handleTitleChange}
        />
      </div>
      <div>
        author
        <input
        value={newBlogAuthor}
        onChange={handleAuthorChange}
        />
      </div>
      <div>
        url
        <input
        value={newBlogUrl}
        onChange={handleUrlChange}
        />
      </div>
      <button type='submit'>create</button>
    </form>
    </>
  )

  const blogList = () => (
    <>
    <h2>blogs</h2>
    <p>
      {user.name} is logged 
      <button onClick={logoutAction}>logout</button>
    </p>
    {addBlogForm()}
    <div>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
    </>
  )

  return (
    <>
      <h1>BlogListAPP</h1>
      <Notification message={notificationMessage} />
      { user === null ? loginForm() : blogList()}
    </>
  )
}

export default App