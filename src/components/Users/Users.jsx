import React, { useState } from "react";
import '../../css/Users.css'


import axios from "axios";


class Users extends React.Component{

    componentDidMount(){
        axios.get('/api/users')
             .then(response => {
                this.props.setUsers(response.data)
             })
    }

    render(){
        return(
        <div className="users">
            <div className="header-users">
                <div className="vector-search"></div>
                <input type="text" id="search-users" placeholder="Search"/>
            </div>
            <div className="users-list">
                {
                    this.props.users.map( user =>(
                        <div className="user-item">
                            <div className="user-container">
                                <div className="user-avatar">
                                    <img src='' alt="" />
                                </div>
                                <div className="name-activity" >
                                    <div className="name-user" >{user.name}</div>
                                    <div className="activity">
                                        <button className="btn-send-message" id="btn-user" >
                                            <div className="btn-content">
                                                <span className="text-btn">Message</span>
                                                <div className="vector-send"></div>
                                            </div>
                                        </button>
                                        <button className="btn-follow" id="btn-user" onClick={() =>{ this.props.followUser(props.id, props.followStatus)}}>
                                            <div className="btn-content">
                                                {
                                                user.followStatus
                                                ?  <span className="text-btn">Unfollow</span> : <span className="text-btn">Follow</span>
                                                }
                                                <div className="vector-follow"></div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        )
    }
}


export default Users
