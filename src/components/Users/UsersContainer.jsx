import { followActionCreator, isFetchingActionCreator, openUserPageActionCreator, setUsersActionCreator, startChattingActionCreator, updateUsersActionCreator, updateStatusChangedActionCreator } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.usersList,
        isFetching: state.usersPage.isFetching,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalPagesCount: state.usersPage.totalPagesCount,
        update: state.usersPage.update
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        openUserPage:(index) => {
            console.log('Page user id: ' + index + ' was opened');
            dispatch( openUserPageActionCreator(index) )
        },
        followUser: (index, followStatus, users) =>{
            dispatch( followActionCreator(index, followStatus, users) )
        },
        startChat: (index, sender) =>{
            dispatch( startChattingActionCreator(index, sender) )
        },
        setUsers: (users) =>{
            dispatch( setUsersActionCreator(users) )
        },
        updateUsers: (page) =>{
            dispatch( updateUsersActionCreator(page) )
        },
        isFetchingStatus: (fetchStatus) =>{
            dispatch( isFetchingActionCreator(fetchStatus) )
        },
        updateStatusChanged: (update) =>{
            dispatch( updateStatusChangedActionCreator(update) )
        }
    } 
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer