import React from 'react'
import "./topbar.css"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import { logOut } from '../../redux/userRedux'
import { useDispatch } from 'react-redux'

const Topbar = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user?.currentUser)
  return (
    <div>
    <div className="top-nav" id="home">

    </div>

    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container  fixed-top bg-light">
            <Link className="navbar-brand" to="/">ESSOR<span className="dot">.</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings">User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/write">Write</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/settings">Portfolio</Link>
                    </li>
               
                   
                </ul>
                {user?  <Link to="/login" className="btn btn-brand ms-lg-3" onClick={()=>dispatch(logOut()) }>Logout</Link>:  <Link to="/login" className="btn btn-brand ms-lg-3">Login</Link>}
               
            </div>
        </div>
    </nav>
    
    </div>
  )
}

export default Topbar