import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setFeed } from '../../utils/feedSlice'; // Assuming you have a feedSlice to manage feed state
import axios from 'axios';
import { BASE_URL } from '../../utils/constants'; // Import the base URL from constants
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed); // Access the feed state from Redux store

  const feeddata = async () => {
    try{
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true, // Include credentials in the request
      });
      if (res.status === 200) {
        dispatch(setFeed(res.data));
        console.log("Feed data set in Redux store");
      }
    }
    catch (error) {
      console.error("Error fetching feed data:", error);
    }
  }

  useEffect(() => {
    feeddata(); // Fetch feed data when the component mounts
  }, []);

  
  
  return (
    <>
    <div>{feed}</div>
    </>
  )
}

export default Feed;