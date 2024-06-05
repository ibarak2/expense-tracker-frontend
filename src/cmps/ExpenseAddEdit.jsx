import { useEffect, useState } from "react"
import { expenseService } from "../services/expense.service"

export const ExpenseAddEdit = ({
    expense,
    onSaveExpense,
    handleAddEditModal,
}) => {
    const [expenseToEdit, setExpenseToEdit] = useState(
        expenseService.getEmptyExpenseToAdd,
    )

    useEffect(() => {
        if (expense && expense._id) setExpenseToEdit(expense)
    }, [])

    const handleExpenseInputs = (e) => {
        let { name, value, type } = e.target
        value = type === "number" ? +value : value
        if (value === 0) value = ""
        setExpenseToEdit((prevState) => ({ ...prevState, [name]: value }))
    }

    return (
        <div className='expense-add-edit-bg'>
            <div className='expense-add-edit'>
                <h2>
                    {expense && expense._id ? "Edit Expense" : "Add Expense"}
                </h2>
                <div className='input-wrapper'>
                    <label htmlFor='title'>Title</label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        value={expenseToEdit.title}
                        onChange={handleExpenseInputs}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='price'>Price</label>
                    <input
                        min={0}
                        type='number'
                        id='price'
                        name='price'
                        value={expenseToEdit.price}
                        onChange={handleExpenseInputs}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='category'>Category</label>
                    <select
                        name='category'
                        id='category'
                        onChange={handleExpenseInputs}
                        value={expenseToEdit.category}
                    >
                        <option value=''>Select Category</option>
                        {expenseService
                            .getExpensesCategory()
                            .map((category, idx) => {
                                return <option key={idx}>{category}</option>
                            })}
                    </select>
                </div>
                <button onClick={() => onSaveExpense(expenseToEdit)}>
                    {expense && expense._id ? "Confirm" : "Add"}
                </button>
                <button onClick={() => handleAddEditModal("close")}>
                    Close
                </button>
            </div>
        </div>
    )
}
