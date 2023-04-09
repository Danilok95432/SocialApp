import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import '../../css/Users.css'


import axios from "axios";
import Preloader from "../Common/Preloader";

const Users = (props) =>{

    const [users,setUsers] = useState([]);
    const [pageCount,setPageCount] = useState(1);
    const [itemOffset,setItemOffset] = useState(0);
    const navigate = useNavigate();

    useEffect( () =>{
        axios.get(`/api/users/${props.currentPage}`)
            .then(response => {
                setUsers(response.data.users)
                setPageCount(response.data.pageCount)
            })
    },[props.currentPage])

    let totalPages = pageCount
    let pages = []

    for(let i = 1; i <= totalPages; i++){
        pages.push(i);
    }

    return(
        <>
        <div className="users">
            <div className="header-users">
                <div className="vector-search"></div>
                <input type="text" id="search-users" placeholder="Search"/>
            </div>
            <div>
                {
                    false ? <Preloader /> : null
                }
            </div>
            <div className="users-list">
                {
                    users.map( user =>(
                        <div className="user-item" key={user.id}>
                            <div className="user-container">
                                <div className="user-avatar">
                                    <img className="photo-small" src={user.photoUrl.small.source} alt="" onClick={ () => navigate('/profile/' + user.id)}/>
                                </div>
                                <div className="name-activity" >
                                    <div className="name-user" onClick={ () => navigate('/profile/' + user.id)}>{user.name}</div>
                                    <div className="activity">
                                        <button className="btn-send-message" id="btn-user" >
                                            <div className="btn-content">
                                                <span className="text-btn">Message</span>
                                                <div className="vector-send"></div>
                                            </div>
                                        </button>
                                        <button className="btn-follow" id="btn-user" onClick={() =>{props.followUser(user.id, user.followStatus, users)}}>
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
        <div className="pagination">
            {
                pages.map( page => {
                    let name = ''
                    if(props.currentPage === page) name = 'selected'
                    return <span className={name} key={page} onClick={ () => {
                        const newOffset = (page * props.pageSize) - props.pageSize; 
                        setItemOffset(newOffset)
                        props.updateUsers(page)
                        props.updateStatusChanged(false)
                    }}>{page}</span>
                })
            }
        </div>
        </>
    )
}


export default Users
