import login from "../services/login.js"

const loginForm = ({
    handleLogin,
    handleUsernameChange,
    handlePasswordChange,
    username,
    password,

}) => {
    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input
                    type='text'
                    value={username}
                    name='Username'
                    onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    password
                    <input
                    type='password'
                    value={password}
                    name='Password'
                    onChange={handlePasswordChange}
                    />
                </div>
                <button type='submit'>login</button>
            </form>
        </div>
    )
  }

  export default loginForm