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

const MessagesItem = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>

    )
}

const Dialogs = () => {
    return (
            <div className={classes.dialogs}>
                <div className={classes.dialogItems}>
                <DialogItem id='1' name='Иван Сергеев' />
                <DialogItem id='2' name='Сергей Иванов' />
                <DialogItem id='3' name='Михаил Терентьев' />
                <DialogItem id='4' name='Анна Петрова' />
                </div>
                 <div className={classes.messagesItems}>
                <MessagesItem message='Привет, как ты?' />
                <MessagesItem message='Когда встретимся?' />
                <MessagesItem message='Ну как там с деньгами?' />
                <MessagesItem message='Что нового?' />
                </div>
            </div>

    )
}

export default Dialogs