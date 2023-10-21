import React from "react";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary">
      <div className="40-w p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Login</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-check"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember me 
            </label>
          </div>
          <div className="g-grid">
            <button className="btn btn-primary">Sign in</button>
          </div>
          <p className="text-end mt-2 ">
            Forgot <a href="/">Password</a>
            <Link to="/signup" className="ms-2">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
