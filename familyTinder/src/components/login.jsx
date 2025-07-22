import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../utils/userSlice"; // Assuming you have a userSlice to manage user state

const Login = () => {
  const [email, setEmail] = useState("golu.73@gmail.com");
  const [password, setPassword] = useState("Golu@12345");
  const dispatch = useDispatch();

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:7777/login", {
        email,
        password,
      },
      {
        withCredentials: true, // Include credentials in the request
      }
    );
      if (response.status === 200) {
        alert("Login successful!");
        // Redirect to profile or home page
      }
      // Dispatch the user data to the Redux store
      dispatch(setUser(response.data));
      console.log("User data set in Redux store");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="flex justify-center">
      <div className="w-100 shadow-4xl bg-base-300 rounded-4xl p-5 mt-[70px]">
        <div className="text-center">
          <h2 className="font-bold text-2xl p-2 m-3">Login Here</h2>
          <div className="flex flex-col p-2 m-5 items-center">
            <label className="justify-center">Email ID: {email}</label>
            <input
              type="text"
              placeholder="email"
              className="p-2 m-3 border-none rounded-lg w-[100%]"
              style={{ border: "1px-solid-black" }}
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              className="p-2 m-3 border-solid border-inherit rounded-lg w-[100%]"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="p-2 m-5">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
