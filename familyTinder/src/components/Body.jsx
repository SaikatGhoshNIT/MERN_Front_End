import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { BASE_URL } from '../../utils/constants' // Import the base URL from constants

const Body = () => {
  const dispatch = useDispatch();

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
      console.error("Error fetching user data:", error);
    }
  }








  return (
    <div className='flex flex-col min-h-screen'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Body