import React from "react";
import Add from "../img/addAvatar.png";
// import "./style.scss"

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Sam Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>Don't have a account? Register</p>
      </div>
    </div>
  );
};

export default Login;
