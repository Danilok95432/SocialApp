import React from "react";
import { NavLink } from "react-router-dom";
import '../../css/DialogsList.css'

const DialogItem = (props) =>{ 
    let selectDialog = () => {
        props.openDialog(props.id);
    }
    return(
        <NavLink to={'/dialogs/im/' + props.id}>
            <div className="item-message" onClick={selectDialog}>
                <div className="avatar-main"></div>
                <div className="description">
                    <div className="name-sender">{props.sender}</div>
                    <div className="content-message">{props.content}</div>
                </div>
                <div className="additional-info">
                    <div className="time-message">{props.time}</div>
                    <div className="notification"></div>
                </div>
            </div>
        </NavLink>
    );
}

export default DialogItem;