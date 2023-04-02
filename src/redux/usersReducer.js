
const OPEN_USER_PAGE = 'OPEN-USER-PAGE',
      FOLLOW_USER = 'FOLLOW-USER',
      START_CHAT = 'START-CHAT',
      SET_USERS = 'SET-USERS'

let initialState = {
    usersList: [
        
    ]
}

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case OPEN_USER_PAGE: {
            let index = action.id;
            let elem = state.usersList.find(x => x.id === index);
            return state;
        }
        case FOLLOW_USER: {
            let index = action.id;
            let flag = action.followStatus;
            let elem = state.usersList.find(x => x.id === index);
            if(flag === true){
                elem.followStatus = false;
            }
            else{
                elem.followStatus = true;
            }
            return{
                ...state,
                usersList: [...state.usersList]
            }
        }
        case START_CHAT: {
            console.log('Chat number ' + action.id + ' starts with ' + action.sender)
            return state;
        }
        case SET_USERS: {
            return{
                ...state,
                usersList: [...state.usersList, ...action.users]
            }
        }
        default:
            return state;
    }
}

export let openUserPageActionCreator = (index) =>{
    return{
        type: OPEN_USER_PAGE,
        id: index
    }
}

export let followActionCreator = (index, followStatus) =>{
    return{
        type: FOLLOW_USER,
        id: index,
        followStatus: followStatus
    }
}

export let startChattingActionCreator = (index, sender) =>{
    return{
        type: START_CHAT,
        id: index,
        sender: sender
    }
}

export let setUsersActionCreator = (users) =>{
    return{
        type: SET_USERS,
        users: users
    }
}

export default usersReducer