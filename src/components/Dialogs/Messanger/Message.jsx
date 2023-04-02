import React from 'react';
import '../../../css/Message.css'

const Message = (props) => {

    let selectMessage = () =>{
        props.selectMessage(props.id);
    }

    let deleteMessage = () =>{
        props.deleteMessage(props.id);
    }

    return(
        <div className="message" onClick={selectMessage}>
            <div className="avatar-main"></div>
            <div className="description">
                <div className="name-sender">{props.sender}</div>
                <div className='text-message'>{props.text}</div>
                <div className="content-message">{props.content}</div>
            </div>
            <div className="additional-info">
                <div className="time-message">{props.time}</div>
            </div>
            <button className='delete-message' onClick={deleteMessage}></button>
        </div>
    )
}

export default Message