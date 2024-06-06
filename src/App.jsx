import { BrowserRouter, Routes } from 'react-router-dom'
import { renderRoutes } from './routes'
import { AppHeader } from './cmps/AppHeader'
import { AppFooter } from './cmps/AppFooter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
    return (
        <div>
            <ToastContainer />
            <BrowserRouter>
                <AppHeader />
                <Routes>{renderRoutes()}</Routes>
                <AppFooter />
            </BrowserRouter>
        </div>
    )
}
