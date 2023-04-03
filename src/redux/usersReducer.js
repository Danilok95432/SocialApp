const OPEN_USER_PAGE = 'OPEN-USER-PAGE',
      FOLLOW_USER = 'FOLLOW-USER',
      START_CHAT = 'START-CHAT',
      SET_USERS = 'SET-USERS',
      UPDATE_USERS = 'UPDATE-USERS',
      IS_FETCHING = 'IS-FETCHING',
      UPDATE_STATUS = 'UPDATE-STATUS'

let initialState = {
    usersList: [],
    isFetching: false,
    pageSize: 4,
    currentPage: 1,
    update: true
}

export let sizePage = initialState.pageSize;

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
        case OPEN_USER_PAGE: {
            let index = action.id;
            let elem = state.usersList.find(x => x.id === index);
            return state;
        }
        case FOLLOW_USER: {
            debugger
            let index = action.id;
            let flag = action.followStatus;
            let elem = action.users.find(x => x.id === index);
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
        case UPDATE_USERS:{
            return{
                ...state,
                currentPage: action.page
            }
        }
        case IS_FETCHING: {
            let flag = false;
            if(!action.fetchStatus){
                flag = true
            }
            return{
                ...state,
                isFetching: flag
            }
        }
        case UPDATE_STATUS: {
            
            let flag = true;
            if(action.update){
                flag = false;
            }
            return{
                ...state,
                update: flag
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

export let followActionCreator = (index, followStatus, users) =>{
    return{
        type: FOLLOW_USER,
        id: index,
        followStatus: followStatus,
        users: users
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

export let updateUsersActionCreator = (page) =>{
    return{
        type: UPDATE_USERS,
        page: page
    }
}

export let isFetchingActionCreator = (fetchStatus) =>{
    return{
        type: IS_FETCHING,
        fetchStatus: fetchStatus
    }
}

export let updateStatusChangedActionCreator = (update) =>{
    return{
        type: UPDATE_STATUS,
        update: update
    }
}

export default usersReducer