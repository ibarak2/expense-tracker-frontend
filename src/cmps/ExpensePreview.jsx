import { utilService } from '../services/util.service'

export const ExpensePreview = ({
    expense,
    handleAddEditModal,
    onRemoveExpense,
}) => {
    return (
        <tr className='expense-preview'>
            <td className='date-td'>
                <span className='mobile-title'>Date: </span>
                {utilService.fullFormatDate(expense.createdAt)}
            </td>
            <td className='title-td'>
                <span className='mobile-title'>Title: </span>
                <p>{expense.title}</p>
            </td>
            <td className='price-td'>
                <span className='mobile-title'>Price: </span>
                {expense.price}
            </td>
            <td className='category-td'>
                <span className='mobile-title'> Category: </span>
                {expense.category}
            </td>
            <td className='btns-td'>
                <button
                    className='action-btn edit-btn'
                    onClick={() => handleAddEditModal('open', 'edit', expense)}
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
