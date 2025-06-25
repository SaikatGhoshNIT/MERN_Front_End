import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="card flex items-center justify-center mt-[50px]">
        <div className="card-body bg-base-150 w-150 h-[64vh] shadow-sm items-center text-center">
          <h2 className="card-title">Login Here</h2>
          <div className="flex flex-col p-2 m-5">
            <input type="text" placeholder="email" className="p-2 m-3 border-none rounded-lg w-[100%]" />
            <input type="text" placeholder="password"  className="p-2 m-3 border-solid border-inherit rounded-lg w-[100%]" />
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
