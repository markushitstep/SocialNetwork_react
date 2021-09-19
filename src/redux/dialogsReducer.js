const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageText : action.newMessage
            };
        }
        case SEND_MESSAGE:{
            let messageBody = state.newMessageText;
            return{
                ...state,
                newMessageText : '',
                messages: [...state.messages,{ id: 6, message: messageBody }]
            };
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_BODY, newMessage: text });

export default dialogsReducer;