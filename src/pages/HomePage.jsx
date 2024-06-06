import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { errorMsg, fixMsg } from "../services/toastify-service"
import { expenseService } from "../services/expense.service"
import { useUserStore } from "../store/user"
import { ExpensesList } from "../cmps/ExpensesList"
import { ExpenseAddEdit } from "../cmps/ExpenseAddEdit"
import { FilterBy } from "../cmps/FilterBy"
import { PieChart } from "../cmps/PieChart"

export function HomePage() {
    const loggedInUser = useUserStore((state) => state.loggedInUser)

    const [expenses, setExpenses] = useState([])
    const [expense, setExpense] = useState(null)
    const [filterBy, setFilterBy] = useState(expenseService.getDefaultFilter())
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (loggedInUser) loadExpenses()
    }, [filterBy])

    const loadExpenses = async () => {
        try {
            setIsLoading(true)
            const expensesRes = await expenseService.query(filterBy)
            setExpenses(expensesRes)
            setIsLoading(false)
        } catch {
            toast("An error occured, cannot load expenses.", errorMsg)
        }
    }

    const onSaveExpense = async (expenseToEdit) => {
        try {
            if (
                !expenseToEdit.title ||
                !expenseToEdit.price ||
                !expenseToEdit.category
            ) {
                toast("Please fill all the fields.", fixMsg)
                return
            }
            const res = await expenseService.save(expenseToEdit)
            if (res) {
                handleAddEditModal("close")
                loadExpenses()
            }
        } catch {
            toast("An error occured, please try again.", errorMsg)
        }
    }

    const onRemoveExpense = async (expenseId) => {
        try {
            const res = await expenseService.remove(expenseId)
            if (res) {
                loadExpenses()
            }
        } catch {
            toast("An error occured, please try again.", errorMsg)
        }
    }

    const handleAddEditModal = (action, type, expense) => {
        // handle close modal
        if (action === "close") {
            setIsModalOpen(false)
            return
        }

        // handle open modal
        if (action === "open") {
            if (type === "add") {
                setExpense(null)
            } else if (type === "edit") {
                setExpense(expense)
            }
            setIsModalOpen(true)
        }
    }

    const onSetFilterBy = (filterByToEdit) => {
        setFilterBy(filterByToEdit)
    }

    return (
        <div className='home-page'>
            <div className='content'>
                <FilterBy
                    filterBy={filterBy}
                    onSetFilterBy={onSetFilterBy}
                />
                <button
                    className='add-btn'
                    onClick={() => handleAddEditModal("open", "add")}
                >
                    New Expense
                </button>
                {isLoading && <h2>Loading...</h2>}
                {!isLoading && expenses.length === 0 && <h2>No Expenses</h2>}
                {expenses && expenses.length > 0 && (
                    <>
                        <ExpensesList
                            expenses={expenses}
                            handleAddEditModal={handleAddEditModal}
                            onRemoveExpense={onRemoveExpense}
                        />
                        <PieChart expenses={expenses} />
                    </>
                )}

                {isModalOpen && (
                    <ExpenseAddEdit
                        expense={expense}
                        onSaveExpense={onSaveExpense}
                        handleAddEditModal={handleAddEditModal}
                    />
                )}
            </div>
        </div>
    )
}
