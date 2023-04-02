import React from "react";
import Blog from './Blog'
import BlogContainer from "./BlogContainer";
import '../../css/Profile.css'
const Profile = (props) =>{
    return(
        <div className="profile">
            <div className="logo-block-content">
                <div className="cover-logo-content"></div>
                <div className="info-logo-conent"></div>
                <div className="circle-photo"></div>
            </div>
            <div className="main-content-block">
                <div className="main-column-content">
                    <div className="photos-block"> 
                        <h1 className="hint">photo</h1>
                    </div>
                    <BlogContainer />
                </div>
                <div className="additional-column-content">
                    <div className="aboutUser-block">
                        <h1 className="hint">about user</h1>
                    </div>
                    <div className="friends-block">
                        <h1 className="hint">friends</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;