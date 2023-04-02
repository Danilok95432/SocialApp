import React from "react";
import '../../css/Post.css'
const Post = (props) =>{
    return(
        <div className="post">
            <div className="post-content">
                <div className="header-post">
                    <div className="avatar"></div>
                    <div className="info-creator">
                        <div className="creator">{props.creator}</div>
                        <div className="date-publish">{props.date}</div>
                    </div>
                </div>
                <div className="content-post">
                    <div className="text-post">{props.text}</div>
                    <div className="media-content-post">
                        <img className="media" src={props.content} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;