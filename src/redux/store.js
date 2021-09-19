import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you?', countLikes: 25 },
                { id: 2, message: 'It`s my first post', countLikes: 26 },
                { id: 3, message: 'It`s weed!', countLikes: 13 }
            ],
            newPostText: 'Салам'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Maxim' },
                { id: 2, name: 'Volodya' },
                { id: 3, name: 'Jenya' },
                { id: 4, name: 'Den' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'How is your it-kam' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' }
            ],
            newMessageText: ''
        },
        sideBar: {
            friends: [
                { name: 'Sveta' },
                { name: 'Nastya' },
                { name: 'Katya' }
            ]
        }
    },
    _renderRefreshPage() {
        console.log('change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderRefreshPage = observer;
    },


    dispatch(action) { // type :

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.sideBar = sidebarReducer(this._state.sideBar, action);

        this._renderRefreshPage(this._state);

    }
};

export default store;