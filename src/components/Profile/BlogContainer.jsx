import React from "react";
import Blog from "./Blog";
import { addPostActionCreator, updatePostActionCreator } from "../../redux/profileReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.postsList,
        textPost: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addPost: () => {
            dispatch( addPostActionCreator() );
        },
        updatePost: (text) => {
            dispatch( updatePostActionCreator(text) )
        }
    }
}

const BlogContainer = connect(mapStateToProps, mapDispatchToProps)(Blog)

export default BlogContainer