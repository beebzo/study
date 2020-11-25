const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: '1', name: 'Иван Сергеев'},
        {id: '2', name: 'Сергей Иванов'},
        {id: '3', name: 'Михаил Терентьев'},
        {id: '4', name: 'Анна Петрова'},
    ],

    messages: [
        {message: 'Привет, как ты?'},
        {message: 'Когда встретимся?'},
        {message: 'Ну как там с деньгами?'},
        {message: 'Что нового?'}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {message: state.newMessageText};
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageBody;
            return state;
        default:
            return state;
    }
}
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newMessageBody: text})
export default dialogsReducer