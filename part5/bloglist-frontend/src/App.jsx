import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  const handleLogin = async (event) =>{
    event.preventDefault()
    console.log('loggin in with', username, password) // admin admin

    try{
      const user = await loginService.login({username, password})

      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception){
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
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

  const blogList = () => (
    <>
    <h2>blogs</h2>
    <p>
      {user.name} is logged
    </p>
    <div>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
    </>
  )

  return (
    <>
      { user === null ? loginForm() : blogList()}
    </>
  )
}

export default App