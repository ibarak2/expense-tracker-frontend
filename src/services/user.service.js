import { httpService } from './http.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
}

async function login(userCred) {
    try {
        const user = await httpService.post('auth/login', userCred)
        if (user) {
            return saveLocalUser(user)
        }
    } catch {
        throw new Error()
    }
}
async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}

function saveLocalUser(user) {
    user = {
        _id: user._id,
        username: user.username,
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}
