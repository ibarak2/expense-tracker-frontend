import { storageService } from "./async-storage.service"
import { httpService } from "./http.service"

const STORAGE_KEY_LOGGEDIN_USER = "loggedinUser"

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
}

async function login(userCred) {
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)
    const user = await httpService.post("auth/login", userCred)
    if (user) {
        return saveLocalUser(user)
    }
}
async function signup(userCred) {
    // if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    // const user = await storageService.post('user', userCred)
    const user = await httpService.post("auth/signup", userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post("auth/logout")
}

function saveLocalUser(user) {
    user = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        score: user.score,
        isAdmin: user.isAdmin,
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}
