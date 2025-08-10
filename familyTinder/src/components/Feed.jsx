import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Feed = () => {
  const [isVisible, setIsVisible] = useState(true);
  const user = useSelector((state) => state.user); // Assuming you have a user state in Redux

  
  useEffect(() => {
  if (user === null || Object.keys(user).length === 0) {
    setIsVisible(true); // Show button when user is not logged in
  } else {
    setIsVisible(false); // Hide button when user is logged in
  }
}, [user]);
  


  return (<>
    <div>Feed</div>
    <Link to="/login">
      <button className={`p-[3px] m-0.5 text-center bg-emerald-400 ${isVisible === false ? 'hidden' : ''}`}>Login/Sign-in</button>
    </Link>
    </>
  )
}

export default Feed;