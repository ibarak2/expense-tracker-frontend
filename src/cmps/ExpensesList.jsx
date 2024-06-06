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
                    <td className='date-td'>Date</td>
                    <td className='title-td'>Title</td>
                    <td className='price-td'>Price</td>
                    <td className='category-td'>Category</td>
                    <td className='btns-td'>Actions</td>
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
