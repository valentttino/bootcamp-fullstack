import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm.jsx'
import Togglable from './components/Togglable.jsx'
import BlogForm from './components/BlogForm.jsx'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [loginVisible, setLoginVisible] = useState(false)

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

  const loginForm = () => {
    const hideWhenVisible = {display: loginVisible ? 'none' : ''}
    const showWhenVisible = {display: loginVisible? '' : 'none'}

    return(
      <div>
        <div style={hideWhenVisible}>
          <button onClick={() => setLoginVisible(true)}>log in</button>
        </div>
        <div style={showWhenVisible}>
          <LoginForm 
            username={username}
            password={password}
            handleLogin={handleLogin}
            handleUsernameChange={({target}) => setUsername(target.value)}
            handlePasswordChange={({target}) => setPassword(target.value)}
          />
          <button onClick={()=> setLoginVisible(false)}>cancel</button>
        </div>
      </div>
    )
  }

  const logoutAction = () =>{
    window.localStorage.removeItem('loggedBloglistAppUser')
    setUser(null)
  }

  return (
    <>
      <h1>BlogListAPP</h1>
      <Notification message={notificationMessage} />

      {!user && loginForm()}
      {user && 
        <div>
          <div>
            <p>{user.name} logged in</p>
            <button onClick={logoutAction}>logout</button>
            <Togglable buttonLabel="new blog">
              <BlogForm
                addBlog={addBlog}
                newBlogTitle={newBlogTitle}
                handleTitleChange={handleTitleChange}
                newBlogAuthor={newBlogAuthor}
                handleAuthorChange={handleAuthorChange}
                newBlogUrl={newBlogUrl}
                handleUrlChange={handleUrlChange}
              />
            </Togglable>
          </div>
          <div>
            {blogs.map(blog =>
              <Blog key={blog.id} blog={blog} />
            )}
          </div>
        </div>
        }
    </>
  )
}

export default App