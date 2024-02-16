import React, { useEffect, useState } from 'react'
import ProfileData from '../Data/data.json'
import Profile from './Profile';
import { NavLink } from 'react-router-dom';
import Header from '../Navbar/Header';


const Home = () => {

    const [profiles, setprofiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data.json');
                if (!response.ok) {
                    throw new Error('failed to fetch data');
                }

                const data = ProfileData;

                setprofiles(data);
                setLoading(false);
            } catch (error) {
                console.error('fetching error', error);
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error fetching data</p>;
    }

    return (
        <>

            <div className='home-container'>
                <div className='slider'>

                    <div className='slider-top'>
                        <div className="left-title">
                            <h3>categories of girls </h3>
                        </div>

                        <div className='more'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </div>

                    <div className='slider-top'>
                        <div className="left-title">
                            <h3>select Region  </h3>
                        </div>

                        <div className='more'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </div>


                    <div className='slider-top'>
                        <div className="left-title">
                            <h3>Height of girls </h3>
                        </div>

                        <div className='more'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </div>


                    <div className='slider-top'>
                        <div className="left-title">
                            <h3>Weight of girls </h3>
                        </div>

                        <div className='more'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                    </div>



                </div>



                <div className='main-content'>

                    <div className='top-div'>
                        {/* <div className='heading-home'>
                            <h1> </h1>
                        </div> */}

                        <div className='search'>
                            <input type="text" placeholder="Search here..." />
                            <select>
                                <option value="newest">Newly added</option>
                                <option value="best">Best matches</option>
                                <option value="trending">Trending</option>
                                <option value="recommended">Recommended</option>
                            </select>
                        </div>
                    </div>


                    <div className='profile-grid'>
                        {/* <NavLink to={`details/id`} > */}
                        {profiles.map((profile) => (
                            <Profile key={profile.imdbID} profile={profile} />
                        ))}
                        {/* </NavLink> */}
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;