import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser} from "../../utils/userSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/constants"; // Import the base URL from constants
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const user = useSelector((state) => state.user); 
  const dispatch = useDispatch();

  const handleLogout = async() => {
    try{
      await axios.post(BASE_URL + "/logout", {}, {
        withCredentials: true, // Include credentials in the request
      });
      alert("Logout successful!");
      dispatch(removeUser());
    }
    catch (error) {
      console.error("Logout failed:", error);
    }
  }

  useEffect(() => {
    if (user === null || Object.keys(user).length === 0) {
      setIsVisible(true); // Show button when user is not logged in
    } else {
      setIsVisible(false); // Hide button when user is logged in
    }
  }, [user]);

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm w-full">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">Family Tinder</Link>
        </div>
        <Link to="/login">
              <button className={`p-[3px] m-0.5 text-center bg-emerald-400 ${isVisible === false ? 'hidden' : ''}`}>Login/Sign-in</button>
        </Link>
        <span className="pl-[4px] m-[10px] text-white font-bold">{user?.user?.firstName ? user?.user?.firstName : user?.firstName}</span>
        <div className="flex gap-2 mr-5">
          {user && <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="">Settings</Link>
              </li>
              <li>
                <Link to="/login" onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>}
        </div>
      </div>
    </>
  );
};

export default NavBar;
