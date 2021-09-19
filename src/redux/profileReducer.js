import { profileAPI, usersAPI } from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_USERS_STATUS = 'SET_USERS_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hi how are you?', countLikes: 25 },
        { id: 2, message: 'It`s my first post', countLikes: 26 },
        { id: 3, message: 'It`s weed!', countLikes: 13 }
    ],
    newPostText: ' ',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                countLikes: 0
            };
            return  {
                ...state,
                posts : [...state.posts, newPost],
                newPostText : ''
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText : action.newText
            };
        }
        case SET_USERS_PROFILE: {
            return {  ...state, profile: action.profile}
        }
        case SET_USERS_STATUS: {
            return {  ...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setUserStatus = (status) => ({ type: SET_USERS_STATUS, status });

export const setUser = (userId) =>{
    return(dispatch) =>{
        usersAPI.setUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        });
    } 
}

export const getUserStatus = (userId) =>{
    return(dispatch) =>{
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data));
        });
    } 
}

export const updateStatus = (status) =>{
    return(dispatch) =>{
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserStatus(status));
            }
        });
    } 
}

export default profileReducer;