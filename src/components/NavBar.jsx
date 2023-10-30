import React from 'react'
import "../styles/navbar.css"

const NavBar = ({navigateCard, navigateHome}) => {
  return (
    <div className='nav_container'>
      <div className="nav_logo_container">
        <h1 className='logo'>Profile Card</h1>
      </div>
      <div className="nav_menu_container">
       <ul className="nav_menu">
            <li className="nav_item" onClick={navigateHome}>Home</li>
            <li className="nav_item" onClick={navigateCard}>Card</li>
       </ul>
      </div>
    </div>
  )
}

export default NavBar
