import React from "react";

const Login = () => {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login Here</h2>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <div className="card-actions">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
