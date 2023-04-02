const ADD_MESSAGE = 'ADD-MESSAGE',
      UPDATE_MESSAGE = 'UPDATE-MESSAGE',
      DELETE_MESSAGE = 'DELETE-MESSAGE';

let initialState = {
    messagesList: [
        {sender: 'Danila', content: '', text: '123', time: '13:45', id: '1'},
    ],
    newMessageText: '',
    person: 'Person'
}

const messangerReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_MESSAGE:{
            let text = state.newMessageText;
            return{
                ...state,
                newMessageText: '',
                messagesList: [...state.messagesList, {content: '', text: text, sender: 'Danila', time: '13:45'}]
            }
        }
        case UPDATE_MESSAGE:{
            return{
                ...state,
                newMessageText: action.messageText
            }
        }
        case DELETE_MESSAGE:{
            let newState = {...state};
            newState.messagesList = [...state.messagesList];
            newState.messagesList.splice(action.index-1,1);
            return newState;
        }
        default:
            return state;
    }
}

export let addMessageActionCreator = () =>{
    return{
        type: ADD_MESSAGE
    }
}

export let updateMessageActionCreator = (text) =>{
    return{
        type: UPDATE_MESSAGE,
        messageText: text
    }
}

export let deleteMessageActionCreator = (index) =>{
    return{
        type: DELETE_MESSAGE,
        index: index
    }
}

export default messangerReducer