import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className='header'>
    <div className="main-header">
        <div className="left-side-header">
           <NavLink to={"/home"}><img src="/images/Logo.svg" alt="Logo" /></NavLink>
        </div>
        <div className="search-bar">
            <SearchBar/>
        </div>
        <div className="right-side-header">
            <div><img src="/images/favourite.svg" alt="fav" /></div>
            <div><img src="/images/shopping.svg" alt="cart-img" /></div>
            <div><img src="/images/avatar.png" alt="avatar" /></div>
        </div>
    </div>
    </div>
  )
}

export default Header