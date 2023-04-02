import { followActionCreator, openUserPageActionCreator, setUsersActionCreator, startChattingActionCreator } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.usersList
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        openUserPage:(index) => {
            console.log('Page user id: ' + index + ' was opened');
            dispatch( openUserPageActionCreator(index) )
        },
        followUser: (index, followStatus) =>{
            dispatch( followActionCreator(index, followStatus) )
        },
        startChat: (index, sender) =>{
            dispatch( startChattingActionCreator(index, sender) )
        },
        setUsers: (users) =>{
            dispatch( setUsersActionCreator(users) )
        }
 
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer