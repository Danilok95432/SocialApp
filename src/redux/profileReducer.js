const ADD_POST = 'ADD-POST',
      UPDATE_POST = 'UPDATE-POST',
      CHANGE_PROFILE = 'PROFILE-PAGE';

let initialState = {
        postsList : [
            {content:'https://cdn-st3.rtr-vesti.ru/vh/pictures/hd/304/700/2.jpg', text:'My first post', creator:'Danila', date:'20 March 2023'},
            {content:'https://vsegda-pomnim.com/uploads/posts/2022-02/1645922169_1-vsegda-pomnim-com-p-polyarnoe-siyanie-foto-1.jpg', text:'Hello,world!', creator:'Nikita', date:'15 March 2023'}, 
            {content:'https://vsegda-pomnim.com/uploads/posts/2022-02/1645922158_3-vsegda-pomnim-com-p-polyarnoe-siyanie-foto-3.jpg', text:'', creator:'Sasha', date:'13 March 2023'}
            ],
        newPostText: '',
        profile: null,
        profileId: 1
}

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_POST:{
            let options = {year: 'numeric', month: 'long', day: 'numeric' };
            let today  = new Date();
            let newPost = {
            content:'',
            text: state.newPostText,
            creator:'Danila',
            date: today.toLocaleDateString("en-US", options)
            }
            let newState = {...state};
            newState.postsList = [...state.postsList];
            newState.postsList.push(newPost);
            newState.newPostText = '';
            return newState;
        }
        case UPDATE_POST:{
            let newState = {...state}
            newState.newPostText = action.postText;
            return newState;
        }
        case CHANGE_PROFILE:{
            return{
                ...state,
                profileId: action.index
            }
        }
        default:
            return state;
    }
}

export let addPostActionCreator = () =>{
    return{
        type: ADD_POST
    }
}

export let updatePostActionCreator = (text) =>{
    return{
        type: UPDATE_POST,
        postText: text
    }
}

export let changeProfileActionCreator = (index) =>{
    return{
        type: CHANGE_PROFILE,
        index: index
    }
}

export default profileReducer