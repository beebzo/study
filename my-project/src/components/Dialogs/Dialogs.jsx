import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message message={m.message}/> );
    let newMessageText = props.state.newMessageText;

    let newMessageElement = React.createRef()
    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    };
    let onMessageChange = (event) => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <div><textarea placeholder='Введите сообщение' onChange={onMessageChange}
                               value={newMessageText}
                               ref={newMessageElement}
                               name="" id="" cols="30" rows="10"></textarea></div>
                <div><button onClick={onSendMessageClick}>Отправить сообщение</button></div>
            </div>
        </div>
    )
}

export default Dialogs;