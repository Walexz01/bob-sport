import React from 'react'
import { Link } from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {FaSun} from 'react-icons/fa'
import {BsBell} from 'react-icons/bs'
import {BsFillMoonFill} from 'react-icons/bs'

const Topbar = () => {
  return (
    <section className='topbar_section--container'>

    <div className="topbar_section">
            
       <Link className='toplink' to='/'>Bob's equipments</Link>
       <div className="toggle__container">

            <div className="search_container">
                {/* icon */}
                <div className="search_container__icon">
                    <BiSearch/>
                </div>
                <input type="text" />
            </div>

            <div className="drak__light--toggle">
                {/* icons */}
                <div className="sun">
                    <FaSun/>
                </div>
                <div className="moon">
                    <BsFillMoonFill/>
                </div>
                <div className="circle"></div>
            </div>
            <div className="noti">
                {/* icon */}
                <BsBell/>
            </div>
       </div>

       <div className="user__details">
        {/* image */}
        <div className="profile__image">
            {/* <img src={logo}alt="" /> */}
        </div>
        <div className="name">
            {/* name */}
            Adegbite Adewale 
        </div>
       </div>

        </div>
    </section>
  )
}

export default Topbar