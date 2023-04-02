import React from "react";
import '../../css/Dialogs.css';
import Chats from "./Chats";
import DialogListContainter from "./DialogListContainer";
const Dialogs = (props) =>{
    return(
        <div className="dialogs">
            <div className="dialogs-menu">
                <div className="header-dialogs-menu"> 
                    <div className="search-icon"></div>
                    <input className="search-dialogs" type="text"  placeholder="Search"/>
                </div>
                <DialogListContainter />
                
            </div>
            <div className="dialogs-navigation">
                <div className="top-navigation">
                    <span className="link-navigation">All chats</span>
                    <span className="link-navigation">Not viewed</span>
                    <span className="link-navigation">Business notification</span>
                </div>
                <Chats />
            </div>
        </div>
    );
}

export default Dialogs;