import React from 'react';
import { } from '../index'
import { motion } from 'framer-motion';
const Profile = ({ profile }) => {
    return (
        <div className="profile">
            <motion.div
                whileHover={{ scale: 1.1 }}
                transation={{ duration: 0.3 }}
            >
                <img src={profile.image} alt={profile.name} />
            </motion.div>
            <div className='profile-det'>
                <h2>{profile.name}</h2>

                <p>category: {profile.categories}</p>

                <p>Age: {profile.age}</p>
            </div>


        </div>
    );
};

export default Profile;
