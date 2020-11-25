const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: '1', name: 'Иван Сергеев'},
        {id: '2', name: 'Сергей Иванов'},
        {id: '3', name: 'Михаил Терентьев'},
        {id: '4', name: 'Анна Петрова'},
    ],

    messages: [
        {id: '1', message: 'Привет, как ты?'},
        {id: '2', message: 'Когда встретимся?'},
        {id: '3', message: 'Ну как там с деньгами?'},
        {id: '4', message: 'Что нового?'}
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});

            return state
        default:
            return state;
    }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body})
export default dialogsReducer