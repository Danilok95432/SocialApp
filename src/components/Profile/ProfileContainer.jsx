import React from "react";

import Profile from "./Profile";
import { connect } from "react-redux";
import { changeProfileActionCreator } from "../../redux/profileReducer";


let mapStateToProps = (state) =>{
    return{
        profile: state.profilePage.profile,
        profileId: state.profilePage.profileId
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () => {
            dispatch( addPostActionCreator() );
        },
        updatePost: (text) => {
            dispatch( updatePostActionCreator(text) )
        },
        changeProfile: (index) =>{
            dispatch( changeProfileActionCreator(index) )
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer