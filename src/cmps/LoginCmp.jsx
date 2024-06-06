import { useState } from "react"

export const LoginCmp = ({ onLogin, isDisabled }) => {
    const [userInput, setUserInput] = useState({
        username: "",
        password: "",
    })

    const handeInputChange = (e) => {
        const { name, value } = e.target
        setUserInput((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <div className='login-cmp'>
            <h2>Login</h2>
            <div className='input-box'>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    type='text'
                    name='username'
                    autoFocus
                    value={userInput.username}
                    onChange={handeInputChange}
                />
            </div>
            <div className='input-box'>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    value={userInput.password}
                    onChange={handeInputChange}
                />
            </div>

            <button
                disabled={isDisabled}
                onClick={() => onLogin(userInput)}
            >
                Login
            </button>
        </div>
    )
}
