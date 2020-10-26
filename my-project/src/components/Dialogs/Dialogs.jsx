import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path  = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>

    )
}





let addMessageElement= React.createRef()
let addMessage= () => {
    let messageText=addMessageElement.current.value;
    alert (messageText)
}

const Dialogs = (props) => {
    let DialogElements = props.state.dialogs.map (d => <DialogItem id={d.id} name={d.name} /> );
    let MessageElements = props.state.messages.map (m => <MessageItem message={m.message} /> );
    return (<div>
            <div className={classes.dialogs}>
                <div className={classes.DialogsItems}>
                    {DialogElements}
                </div>
                 <div className={classes.MessagesItems}>
                     {MessageElements}
                </div>
            </div>
            <div className={classes.addMessage}><textarea ref={addMessageElement} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button onClick={addMessage}>Отправить</button>
        </div>

    )
}

export default Dialogs