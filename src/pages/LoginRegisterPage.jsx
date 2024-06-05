import { useEffect, useState } from "react"
import { LoginCmp } from "../cmps/LoginCmp"
import { RegisterCmp } from "../cmps/RegisterCmp"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import { errorMsg } from "../services/toastify-service"
import { useUserStore } from "../store/user"

export const LoginRegisterPage = () => {
    const navigate = useNavigate()
    const [isLogin, setIsLogin] = useState(true)
    const loggedInUser = useUserStore((state) => state.loggedInUser)
    const { loginAction, registerAction } = useUserStore((state) => state)

    useEffect(() => {
        if (loggedInUser) navigate("/home")
    }, [])

    const onLogin = async (userCreds) => {
        try {
            const result = await loginAction(userCreds)
            if (result) {
                navigate("/home")
            }
        } catch {
            toast("Couldn't login, please try again.", errorMsg)

            setTimeout(() => {
                window.location.assign("/")
            }, 800)
        }
    }
    const onRegister = async (userCreds) => {
        try {
            const result = await registerAction(userCreds)
            if (result) {
                navigate("/home")
            }
        } catch {
            toast("Couldn't register, please try again.", errorMsg)
            setIsLogin(true)
        }
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
