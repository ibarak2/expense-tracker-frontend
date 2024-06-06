import { toast } from 'react-toastify'
import { useUserStore } from '../store/user'
import { errorMsg } from '../services/toastify-service'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

export function AppHeader() {
    const navigate = useNavigate()
    const loggedInUser = useUserStore((state) => state.loggedInUser)
    const logoutAction = useUserStore((state) => state.logoutAction)

    useEffect(() => {
        if (!loggedInUser) navigate('/')
    }, [])

    async function onLogout() {
        try {
            await logoutAction()
            navigate('/')
        } catch (err) {
            toast('An error occured.', errorMsg)
        }
    }

    return (
        <header className='app-header'>
            <nav>
                <h2 onClick={() => navigate(`${loggedInUser ? '/home' : '/'}`)}>
                    Expense Tracker
                </h2>
                <div className='user-wrapper'>
                    {loggedInUser && <h3>Welcome, {loggedInUser.username}</h3>}
                    {loggedInUser && <button onClick={onLogout}>Logout</button>}
                </div>
            </nav>
        </header>
    )
}
