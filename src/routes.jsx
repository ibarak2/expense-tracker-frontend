import { Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage.jsx"
import { LoginRegisterPage } from "./pages/LoginRegisterPage.jsx"

const routes = [
    {
        path: "/",
        component: <LoginRegisterPage />,
        label: "Login/Register",
    },
    {
        path: "/home",
        component: <HomePage />,
        label: "Home 🏠",
    },
]

export const renderRoutes = () => {
    return routes.map((route, idx) => {
        return (
            <Route
                key={idx}
                path={route.path}
                element={route.component}
            />
        )
    })
}
