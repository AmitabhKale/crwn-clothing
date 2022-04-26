import React, { Fragment, useContext } from 'react'
import { Outlet, Link} from 'react-router-dom'
import {ReactComponent as Crwnsvg } from '../../assets/crown.svg'
import { UserContext } from '../../context/UserContext'
import { signOutUser } from '../../utils/firebase/Firebase'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import './NavigationStyles.scss'

const NavigationComponent = () => {

    const {currentUser,setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        const res = await signOutUser();
        console.log(res);
        setCurrentUser(null)
    }
  return (
    <Fragment> 
    <div className='navigation'>
        <Link to='/' className='logo-container'>
            <Crwnsvg />
        </Link>
        <div className="nav-links-container">
            <Link to='/shop' className="nav-link">
                SHOP
            </Link>
            {
                currentUser ? 
                <span className='nav-link' onClick={signOutHandler}>SIGNOUT</span> : 
                (<Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>)
            }
            
            <CartIcon />
        </div>
        <CartDropdown />
    </div>
        <Outlet />
    </Fragment>
  )
}

export default NavigationComponent