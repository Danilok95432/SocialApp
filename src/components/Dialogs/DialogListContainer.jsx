import React from "react";
import DialogsList from "./DialogsList";
import { openDialogActionCreator, updateLastIdActionCreator, newDialogActionCreator } from "../../redux/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) =>{
    return{
        messages: state.dialogsPage.messageList,
        lastId: state.dialogsPage.lastId
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        openDialog: (index) =>{
            dispatch( openDialogActionCreator(index) );
        },
        updateLastId: (index) =>{
            dispatch( updateLastIdActionCreator(index) );
        }
    }
}

const DialogListContainter = connect(mapStateToProps, mapDispatchToProps)(DialogsList)

export default DialogListContainter