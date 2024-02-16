import React from 'react';
import Logout from './Logout';


const Userprofile = () => {
    const token = localStorage.getItem('token');
    const getuser = JSON.parse(localStorage.getItem('user'));

    if (!token || !getuser || getuser.length === 0) {
        return (
            <div className='profile'>
                <h1>No active user</h1>
            </div>
        );
    }

    const activeUser = getuser.find(user => user.token === token);

    if (!activeUser) {
        return (
            <div className='profile'>
                <h1>No active user</h1>
            </div>
        );
    }

    return (
        <>
            <div className='profile'>
                <h1>USER PROFILE</h1>


                <ul>
                    <h1> {activeUser.name}</h1>

                </ul>

                <Logout />
            </div>
        </>

    );
};

export default Userprofile;
