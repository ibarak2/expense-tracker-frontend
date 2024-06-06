import { useEffect, useState } from 'react'
import { expenseService } from '../services/expense.service'

export const FilterBy = ({ filterBy, onSetFilterBy }) => {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    // Set filter without button click
    // useEffect(() => {
    //     onSetFilterBy(filterByToEdit)
    // }, [filterByToEdit])

    const handleChange = (e) => {
        const field = e.target.name
        let value = e.target.value
        switch (e.target.type) {
            case 'number':
                value = +value
                break

            default:
                break
        }
        if (value === 0) value = ''

        setFilterByToEdit((prevState) => ({ ...prevState, [field]: value }))
    }

    const onSubmitFilter = () => {
        onSetFilterBy(filterByToEdit)
    }

    return (
        <div className='filter-by'>
            <div className='general-filter'>
                <div className='filter-wrapper'>
                    <label htmlFor='title'>Title: </label>
                    <input
                        value={filterByToEdit.title}
                        onChange={handleChange}
                        type='text'
                        placeholder='By Title'
                        id='title'
                        name='title'
                    />
                </div>

                <div className='filter-wrapper'>
                    <label htmlFor='minPrice'>Min Price: </label>
                    <input
                        value={filterByToEdit.minPrice}
                        onChange={handleChange}
                        type='number'
                        placeholder='By Price'
                        id='minPrice'
                        name='minPrice'
                    />
                </div>

                <div className='filter-wrapper'>
                    <label htmlFor='category'>Category</label>
                    <select
                        name='category'
                        id='category'
                        onChange={handleChange}
                        value={filterByToEdit.category}
                    >
                        <option value=''>By Category</option>
                        {expenseService
                            .getExpensesCategory()
                            .map((category, idx) => {
                                return <option key={idx}>{category}</option>
                            })}
                    </select>
                </div>
            </div>

            <div className='date-filter'>
                <div className='filter-wrapper'>
                    <label htmlFor='fromDate'>From</label>
                    <input
                        type='date'
                        id='fromDate'
                        name='fromDate'
                        value={filterByToEdit.fromDate}
                        onChange={handleChange}
                    />
                </div>
                <div className='filter-wrapper'>
                    <label htmlFor='toDate'>To</label>
                    <input
                        type='date'
                        id='toDate'
                        name='toDate'
                        value={filterByToEdit.toDate}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <button onClick={onSubmitFilter}>Set Filter</button>
        </div>
    )
}
