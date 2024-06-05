import { httpService } from "./http.service.js"

const BASE_URL = "expense/"

export const expenseService = {
    query,
    save,
    remove,
}
window.cs = expenseService

async function query(filterBy = { txt: "" }) {
    return httpService.get(BASE_URL, filterBy)
}

async function remove(expenseId) {
    return httpService.delete(BASE_URL + expenseId)
}
async function save(expense) {
    var savedExpense
    if (expense._id) {
        savedExpense = await httpService.put(BASE_URL + expense._id, expense)
    } else {
        savedExpense = await httpService.post(BASE_URL, expense)
    }
    return savedExpense
}
