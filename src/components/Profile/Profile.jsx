import React from "react";
import Blog from './Blog'
import BlogContainer from "./BlogContainer";
import '../../css/Profile.css'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation, useMatch, useNavigate, useParams } from "react-router-dom";
import Preloader from "../Common/Preloader";


const Profile = (props) =>{

    const [profileUser,setProfileUser] = useState([]);
    let index = useParams();
    props.changeProfile(index.userId);

    useEffect( () => {
        axios.get(`/api/profile/${index.userId}`)
             .then(response =>{
                setProfileUser(response.data.profile)
             })
    },[index.userId])

    console.log(profileUser)

    return(
        <div className="profile">
            <>
                <div className="logo-block-content">
                    <div className="cover-logo-content">{}</div>
                    <div className="info-logo-content">
                        <div className="description-user">
                            <div className="user-page-name">{profileUser != undefined ? profileUser.name : <Preloader />}</div>
                        </div>
                    </div>
                    <div className="circle-photo">
                        <img className="circle-real-photo" src={profileUser != undefined &&  profileUser.photoUrl !=undefined ? profileUser.photoUrl.small.source : ''} alt="" />
                    </div>
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
            </>

        </div>
    );
}

export default Profile;