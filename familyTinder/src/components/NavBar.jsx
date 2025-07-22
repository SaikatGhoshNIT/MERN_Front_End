import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.user); 
  return (
    <>
      <div className="navbar bg-base-300 shadow-sm w-full">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Family Tinder</a>
        </div>
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
          </div>}
        </div>
      </div>
    </>
  );
};

export default NavBar;
