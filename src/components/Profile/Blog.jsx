import React from "react";
import Post from '../Profile/Post'
import '../../css/Blog.css' 

const Blog = (props) =>{
    let id = 0;
    let postsData = props.posts.map( postItem => {
    id++;
    return <Post content={postItem.content} text={postItem.text} creator={postItem.creator} date={postItem.date} key={id}/>
    })
    
    let newPost = React.createRef();
    
    let addNewPost = () => {
        props.addPost();
    }

    let updatePost = () => {
        let text = newPost.current.value;
        props.updatePost(text);
    }
    return(
        <div className="blog">
            <div className="what-new-block">
                <div className="visible-block">
                    <div className="avatar"></div>
                    <textarea onChange={ updatePost } ref={newPost} name="" id="new-post-content"  value={props.textPost}/>
                    <button className="addPost-btn" onClick={ addNewPost }>Add post</button>
                </div>
                
            </div>
            <div className="posts">
                {postsData}
            </div>
        </div>
    );
}

export default Blog;