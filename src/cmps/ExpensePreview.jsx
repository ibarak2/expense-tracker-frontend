import { utilService } from "../services/util.service"

export const ExpensePreview = ({
    expense,
    handleAddEditModal,
    onRemoveExpense,
}) => {
    return (
        <tr className='expense-preview'>
            <td>{utilService.fullFormatDate(expense.createdAt)}</td>
            <td>{expense.title}</td>
            <td>{expense.price}</td>
            <td>{expense.category}</td>
            <td>
                <button
                    onClick={() => handleAddEditModal("open", "edit", expense)}
                >
                    Edit
                </button>
                <button onClick={() => onRemoveExpense(expense._id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}
