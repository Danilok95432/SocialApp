const OPEN_DIALOG = 'OPEN-DIALOG',
      NEW_DIALOG = 'NEW-DIALAOG',
      UPDATE_LAST_ID = 'UPDATE-LAST-ID';

let initialState = {
    messageList : [
        {sender: 'Nikita', content: 'Yo,how r u?', time: '13:46', notification: 'false', id: 1 },
        {sender: 'Dima', content: 'Please,call me...', time: '2:46', notification: 'true', id: 2},
        {sender: 'Sasha', content: 'Dude, did u check this video? It is awesome...', time: '10:46', notification: 'false', id: 3},
    ],
    lastId: 0
}

const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case OPEN_DIALOG:{
            let index = action.index;
            let elem = state.messageList.find(x => x.id === index);
            /*
            state.person = elem.sender;
            state.messagesList[0].text = elem.content;
            state.messagesList[0].sender = elem.sender;       
            state.messagesList[0].time = elem.time; 
            */
            return state;
        }
        case NEW_DIALOG: {
            return{
                ...state,
                messageList: [...state.messageList, {sender: action.sender, content: '', time: '', notification: false, id: state.lastId+1}]
            }
        }
        case UPDATE_LAST_ID: {
            return{
                ...state,
                lastId: action.index
            }
        }
        default:
            break;
        
    }
    return state;
}

export let openDialogActionCreator = (index) =>{
    return{
        type: OPEN_DIALOG,
        index: index
    }
}

export let newDialogActionCreator = (index, sender) =>{
    return{
        type: NEW_DIALOG,
        index: index,
        sender: sender
    }
}

export let updateLastIdActionCreator = (index) =>{
    return{
        type: UPDATE_LAST_ID,
        index: index
    }
}

export default dialogsReducer