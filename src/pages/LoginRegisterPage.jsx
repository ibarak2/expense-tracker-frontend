import { useState } from "react"
import { LoginCmp } from "../cmps/LoginCmp"
import { RegisterCmp } from "../cmps/RegisterCmp"

export const LoginRegisterPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    const onLogin = (userInput) => {
        console.log("userInput", userInput)
    }
    const onRegister = (userInput) => {
        console.log("userInput", userInput)
    }

    return (
        <div className='login-register-page'>
            <div className='content'>
                {isLogin && <LoginCmp onLogin={onLogin} />}
                {!isLogin && <RegisterCmp onRegister={onRegister} />}
                {isLogin && (
                    <p>
                        New in here?{" "}
                        <span onClick={() => setIsLogin((prev) => !prev)}>
                            Register.
                        </span>
                    </p>
                )}
                {!isLogin && (
                    <p>
                        Already have an account?{" "}
                        <span onClick={() => setIsLogin((prev) => !prev)}>
                            Login
                        </span>
                    </p>
                )}
            </div>
        </div>
    )
}
