import React, { useState } from "react";
import "./Auth.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

function AuthRegister() {
  const [user, setUser] = useState({ email: "", password: "" });

  TODO: 1;
  function handle(event) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }
  TODO: 2;
  async function signUp() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      if (res) {
        toast.success("User signed up successfully!");
      }
      console.log(res);
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("User signed up error!", error.massage);
    }
  }

  return (
    <div className="register">
      <div className="register-form container">
        <div className="register-text">
          <h3>Create an account</h3>
          <p>Enter your details below</p>
        </div>
        <div className="register-info">
          <div className="inputs">
            <input type="name" placeholder="Name" />
            <input
              onChange={handle}
              value={user.email}
              name="email"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              onChange={handle}
              value={user.password}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="buttons">
            <button className="btnOne" onClick={() => signUp()}>
              Create account
            </button>
            <div className="logIn">
              <p>Already have account?</p>
              <Link className="liInk" to="/login">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthRegister;
