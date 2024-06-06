import { utilService } from "../services/util.service"

export const ExpensePreview = ({
    expense,
    handleAddEditModal,
    onRemoveExpense,
}) => {
    return (
        <tr className='expense-preview'>
            <td className='date-td'>
                {utilService.fullFormatDate(expense.createdAt)}
            </td>
            <td className='title-td'>{expense.title}</td>
            <td className='price-td'>{expense.price}</td>
            <td className='category-td'>{expense.category}</td>
            <td className='btns-td'>
                <button
                    className='action-btn edit-btn'
                    onClick={() => handleAddEditModal("open", "edit", expense)}
                >
                    Edit
                </button>
                <button
                    className='action-btn delete-btn'
                    onClick={() => onRemoveExpense(expense._id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}
