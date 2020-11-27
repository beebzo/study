import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";;

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={classes.messages}>
                <div>{ messagesElements }</div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Введите сообщение'
                               name="" id="" cols="30" rows="10"></textarea></div>
                <div><button onClick={onSendMessageClick}>Отправить сообщение</button></div>
            </div>
        </div>
    )
}

export default Dialogs;