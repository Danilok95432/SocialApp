import React from "react";

import '../../css/Chats.css'
import Chat from './Chat'
const Chats = (props) =>{ 
    
    return(
        <div className="chats">
            <Chat number='1'/>
            <Chat number='2'/>
        </div>
    );
}

export default Chats;