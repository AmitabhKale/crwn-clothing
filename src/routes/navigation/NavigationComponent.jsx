import React from 'react'
import { Outlet, Link} from 'react-router-dom'
import {ReactComponent as Crwnsvg } from '../../assets/crown.svg'
import './NavigationStyles.scss'

const NavigationComponent = () => {
  return (
    <> 
    <div className='navigation'>
        <Link to='/' className='logo-container'>
            <Crwnsvg />
        </Link>
        <div className="nav-links-container">
            <Link to='/shop' className="nav-link">
                SHOP
            </Link>
            <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
        </div>
    </div>
        <Outlet />
    </>
  )
}

export default NavigationComponent