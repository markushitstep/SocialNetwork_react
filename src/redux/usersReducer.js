import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_BUTTON_PROGRESS = 'TOOGLE_IS_BUTTON_PROGRESS';

let initialState = {
    users: [
        //     { id: 1, photoUrl: 'https://www.pngkit.com/png/detail/911-9115516_avatar-icon-deadpool.png', followed: true, fullName: 'Maxim', status: 'I`m programmist', location: { city: 'Kiev', country: 'Ukraine' } },
        //     { id: 2, photoUrl: 'https://www.pngkit.com/png/detail/911-9115516_avatar-icon-deadpool.png', followed: false, fullName: 'Andry', status: 'I`m programmist too', location: { city: 'Moscow', country: 'Russia' } },
        //     { id: 3, photoUrl: 'https://www.pngkit.com/png/detail/911-9115516_avatar-icon-deadpool.png', followed: true, fullName: 'Alex', status: 'I`m programmist too', location: { city: 'Minsk', country: 'Belarus' } },
        //     { id: 4, photoUrl: 'https://www.pngkit.com/png/detail/911-9115516_avatar-icon-deadpool.png', followed: false, fullName: 'Kirill', status: 'I`m programmist too', location: { city: 'Golden-Seands', country: 'Bolgary' } } 
    ],
    usersSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isButtonProgress: []
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_USERS_TOTAL_COUNT: {
            return { ...state, totalUsersCount: action.count }
        }
        case TOOGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOOGLE_IS_BUTTON_PROGRESS: {
            return {
                ...state,
                isButtonProgress: action.isButtonProgress
                    ? [...state.isButtonProgress, action.userId]
                    : state.isButtonProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalCount });
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching });
export const toogleIsButtonProgress = (isButtonProgress, userId) => ({ type: TOOGLE_IS_BUTTON_PROGRESS, isButtonProgress, userId });

export const getUsers = (currentPage,usersSize) => {

    return (dispatch) => {
        
        dispatch(toogleIsFetching(true));

        usersAPI.getUsers(currentPage, usersSize).then(data => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const onPageChanged = (pageNumber,usersSize) => {

    return (dispatch) => {
        
        dispatch(setCurrentPage(pageNumber));
        dispatch(toogleIsFetching(true));
        usersAPI.getUsers(pageNumber, usersSize).then(data => {
            dispatch(toogleIsFetching(false));
            dispatch(setUsers(data.items));
        });
    }
}

export const unfollowClick = (userId) =>{
    return (dispatch) =>{
        dispatch(toogleIsButtonProgress(true, userId));
        usersAPI.delFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(toogleIsButtonProgress(false, userId));
        });
    }
}

export const followClick = (userId) =>{
    return (dispatch) =>{
        dispatch(toogleIsButtonProgress(true,userId));
        usersAPI.setFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(toogleIsButtonProgress(false,userId));
        });
    }
}

export default usersReducer;