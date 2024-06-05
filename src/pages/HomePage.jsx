import { useState } from "react"

export function HomePage() {
    const [expenses, setExpenses] = useState([])
    const [filterBy, setFilterBy] = useState()
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className='home-page'>
            <div className='content'>Home Page</div>
        </div>
    )
}
