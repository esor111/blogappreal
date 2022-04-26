import React from 'react'
import { Link } from 'react-router-dom'
import "./sidebar.css"
const Sidebar = () => {
  return (
    <div>
    
    <div className="sidebarItem">
    <span className="sidebarTitle"> SEARCH CATEGORIES</span>
    <ul className="sidebarList">
      <li className="sidebarListItem">
        <Link className="link" to="/?cat=sport">
         <button className='btn btn-primary'> Sports</button>
        </Link>
      </li>
      <li className="sidebarListItem">
        <Link className="link" to="/?cat=movies">
        <button className='btn btn-primary'> Movies</button>

        </Link>
      </li>
      <li className="sidebarListItem">
        <Link className="link" to="/?cat=music">
        <button className='btn btn-primary'> music</button>

        </Link>
      </li>
      <li className="sidebarListItem">
        <Link className="link" to="/?cat=style">
        <button className='btn btn-primary'> Fashion</button>

        </Link>
      </li>
      <li className="sidebarListItem">
        <Link className="link" to="/=?cat=tech">
        <button className='btn btn-primary'> tech</button>

        </Link>
      </li>
      <li className="sidebarListItem">
        <Link className="link" to="/">
        <button className='btn btn-primary'> All</button>

        </Link>
      </li>
    </ul>
  </div>
    </div>
  )
}

export default Sidebar