import React from "react";
import '../../css/Sidebar.css'
import { NavLink } from "react-router-dom";
const Sidebar = () =>{ 
    return(
        <div className='sidebar-app'>
            <NavLink to='/profile' className="btn-sidebar" >Profile</NavLink>
            <NavLink to='/users' className="btn-sidebar">Users</NavLink>
            <NavLink to='/news' className="btn-sidebar">News</NavLink>
            <NavLink to='/dialogs' className="btn-sidebar">Messages</NavLink>
            <NavLink to='/music' className="btn-sidebar">Music</NavLink>
            <NavLink to='/videos' className="btn-sidebar">Videos</NavLink>
            <NavLink to='/games' className="btn-sidebar">Games</NavLink>
            <NavLink to='/groups' className="btn-sidebar">Groups</NavLink>
            <NavLink to='/friends' className="btn-sidebar">Friends</NavLink>
            <NavLink to='/market' className="btn-sidebar">Market</NavLink>
        </div>
    );
}

export default Sidebar;