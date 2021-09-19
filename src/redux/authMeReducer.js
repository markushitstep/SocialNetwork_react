import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_ERROR_API = 'SET_ERROR_API';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    errorApi: null
};

const authMeReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case SET_ERROR_API:
            return {
                ...state,
                errorApi: action.errorApi
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });
export const setErrorApi = (errorApi) => ({ type: SET_ERROR_API, errorApi });

export const authMe = () => (dispatch) => {
    return  authAPI.setAuthMe()
        .then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}

export const login = (email, password, rememberMe ) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(authMe());
        } else {
            //errorApi = response.data.messages;
            dispatch(setErrorApi(response.data.messages));
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authMeReducer;