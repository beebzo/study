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

let dialogs = [
    {id:'1', name:'Иван Сергеев'},
    {id:'2', name:'Сергей Иванов'},
    {id:'3', name:'Михаил Терентьев'},
    {id:'4', name:'Анна Петрова'},
]

let messages = [
    {message:'Привет, как ты?'},
    {message:'Когда встретимся?'},
    {message:'Ну как там с деньгами?'},
    {message:'Что нового?'}
]

let DialogElements = dialogs.map (d => <DialogItem id={d.id} name={d.name} /> );
let MessageElements = messages.map (m => <MessageItem message={m.message} /> );



const Dialogs = () => {
    return (
            <div className={classes.dialogs}>
                <div className={classes.DialogsItems}>
                    {DialogElements}
                </div>
                 <div className={classes.MessagesItems}>
                     {MessageElements}
                </div>
            </div>

    )
}

export default Dialogs