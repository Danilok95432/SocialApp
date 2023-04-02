import React from "react";
import '../../css/DialogsList.css'
import DialogItem from "./DialogItem";
const DialogsList = (props) =>{ 

    let id = 0;
    let messageData = props.messages.map( messageItem => {
    id++;
    return <DialogItem openDialog={ props.openDialog } sender={messageItem.sender} content={messageItem.content} time={messageItem.time} notification={messageItem.date} key={id} id={id}/>
    })
    props.updateLastId(id);
    return(
        <div className='messages'>
            {messageData}
        </div>
    );
}

export default DialogsList;
