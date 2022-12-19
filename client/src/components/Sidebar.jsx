import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../image/logo.png'
import { Links } from '../data'

const Sidebar = () => {
  return (
    <nav className='sidebar'>
        <Link className='sidebar__logo__container' to='/'>
            <img src={logo} alt="" />
        </Link>

            <ul className="sidebar_nav_container">
                {
                    Links.map((link,index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={link.path} className={({isActive})=> isActive ? 'active_nav':''}><span className='icon'>{link.icon}</span> {link.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="bottom_logo__container">
            <div className='sidebar__logo__container bottom_logo'>
                <img src={logo} alt="" />
            </div>
                <div className='details'></div>
            </div>
        
    </nav>
  )
}

export default Sidebar