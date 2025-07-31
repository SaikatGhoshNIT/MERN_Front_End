import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../../utils/userSlice' // Assuming you have a userSlice to manage user state
import axios from 'axios'
import { BASE_URL } from '../../utils/constants' // Import the base URL from constants
import { useNavigate } from 'react-router-dom'
import Error from './Error';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const user = useSelector((state) => state.user); // Assuming you have a user state in Redux

  const fetchUser = async () => {
    try{
      const response = await axios.get(BASE_URL + "/profile", {
        withCredentials: true, // Include credentials in the request)
      });
      if (response.status === 200) {
        dispatch(setUser(response.data)); // Dispatch the user data to the Redux store
        console.log("User data fetched and set in Redux store");
      }
    }
    catch (error) {
      if (error.response.status === 403) {
        navigate("/login");
      }
      else{
        setHasError(true) // Render an error component if the request fails
      }
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    if (!user) {
     fetchUser();
    }
    // Fetch user data when the component mounts
  }, []);


  return (
    hasError ? <Error /> :
    // Render the main layout with NavBar, Outlet, and Footer
    <div className='flex flex-col min-h-screen'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body