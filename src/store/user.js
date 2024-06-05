import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { userService } from "../services/user.service"

export const useUserStore = create()(
    devtools((set) => ({
        loggedInUser: userService.getLoggedinUser(),
        loginAction: async (creds) => {
            try {
                const loggedInUser = await userService.login(creds)
                set(() => ({ loggedInUser }))
                return true
            } catch {
                throw new Error()
            }
        },
        registerAction: async (creds) => {
            try {
                const loggedInUser = await userService.signup(creds)
                set(() => ({ loggedInUser }))
                return true
            } catch {
                throw new Error()
            }
        },
        logoutAction: async () => {
            try {
                await userService.logout()
                set(() => ({ loggedInUser: null }))
            } catch {
                throw new Error()
            }
        },
    })),
)
