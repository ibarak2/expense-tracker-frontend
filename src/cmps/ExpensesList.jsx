import { ExpensePreview } from "./ExpensePreview"

export const ExpensesList = ({
    expenses,
    handleAddEditModal,
    onRemoveExpense,
}) => {
    return (
        <table className='expenses-list'>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Category</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense, idx) => {
                    return (
                        <ExpensePreview
                            key={idx}
                            expense={expense}
                            handleAddEditModal={handleAddEditModal}
                            onRemoveExpense={onRemoveExpense}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}
