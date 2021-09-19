import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import Dialog from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(el => <Dialog name={el.name} id={el.id} />);

    let messagesElements = state.messages.map(el => <Message message={el.message} />);

    let onSendMessageClick = () =>{
        props.sendMessage();
    }

    let onNewMessageChange = (event) =>{
        let bodyMessageText = event.target.value;
        props.updateNewMessageBody(bodyMessageText);  
    }

    if(!props.isAuth) return <Redirect to={'/login'}/> ;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {   dialogsElements     }
            </div>
            <div className={s.messages}>
                <div>{   messagesElements    }</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={state.newMessageText}
                                                                 placeholder='Enter message'></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;