import React from "react";

import '../../css/Chats.css'
const Chat = (props) =>{ 
    
    return(
        <div className="chat-item">
            <span>{props.number}</span>
        </div>
    );
}

export default Chat;