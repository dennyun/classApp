import authService from "../services/authSevice";

export const LOGIN_SUCCESS = '@ACCOUNT/LOGIN_SUCCESS';
export const SILENT_LOGIN = '@ACCOUNT/SILENT_LOGIN';
export const LOGOUT = '@ACCOUNT/LOGOUT';

const login = (email, password) => {
    return async (dispatch) => {
        const user = await authService.login(email, password)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                user
            }
        })
    }
}

const setUserData = () => {
    return async (dispatch) => {
        const user = await authService.loginToken()
        dispatch({
            type: SILENT_LOGIN,
            payload: {
                user
            }
        })
    }
}

const logout = () => {
    return async (dispatch) => {
        await authService.logout()
        dispatch({
            type: LOGOUT,

        })
    }
}

export { login, setUserData, logout };