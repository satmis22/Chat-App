import React, { useState } from "react"
import Add from "../img/addAvatar.png" 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";
// import { async } from "@firebase/util";


const Register = () => {
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = console.log(e.target[0].value);
    const email = console.log(e.target[1].value);
    const password = console.log(e.target[2].value);
    const file = console.log(e.target[3].files[0]);

    try {

      const res = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Sam Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Already have a account? Login</p>
      </div>
    </div>
  );

        }
export default Register
