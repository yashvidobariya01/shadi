import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>

            <div className='header'>

                <div className='upper-header'>

                    <div className='logo'>
                        <img src='images/icon.png' alt='logo' style={{ height: 70, width: 70 }} />
                    </div>

                    <div className='upper-right'>
                        <Link to="/login">Login</Link>
                        <Link to="/profile">profile</Link>
                    </div>
                </div>


                <div className='main-header'>
                    <div className='left'>

                        <Link to="/">Home</Link>
                        <Link to="/reviews">reviews</Link>
                        <Link to="/Videos">Videos</Link>
                        <Link to="/aboutus">About us</Link>
                        <Link to="/contactus">Contact us</Link>

                    </div>

                </div>
            </div>

        </>

    )
}

export default Header