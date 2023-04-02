import React from "react";
import { addMessageActionCreator, updateMessageActionCreator, deleteMessageActionCreator } from "../../../redux/messangerReducer";
import Messanger from "./Messanger";
import { connect } from "react-redux";


let mapStateToProps = (state) =>{
    return{
        messages: state.messangerPage.messagesList,
        textMessage: state.messangerPage.newMessageText,
        person: state.messangerPage.person
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addMessage: () =>{
            
            dispatch( addMessageActionCreator() );
        },
        updateMessage: (text) =>{
            dispatch( updateMessageActionCreator(text) );
        },
        selectMessage: (index) =>{
            console.log('Message ' + index + ' was selected');
        },
        deleteMessage: (index) =>{ 
            console.log('Message ' + index + ' was deleted');
            dispatch( deleteMessageActionCreator(index) );
        },
        returnToBack: () =>{
            console.log('Pressed back');
        },
    }
}

const MessangerContainer = connect(mapStateToProps, mapDispatchToProps)(Messanger);

export default MessangerContainer