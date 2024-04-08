import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function nameChange(e) {
    setName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function submitButton(e) {
    e.preventDefault();
    if (name && email && password) {
      dispatch({
        type: "Register",
        payload: {
          id: new Date().getTime(),
          name,
          email,
          password,
        },
      });
      navigate("/Login");
    } else {
      alert("Please fill all fields");
    }
  }
  return (
    <div className="SignUp">
      <form className="SignUp__Form">
        <h1>Register Here</h1>
        <br></br>
        <input
          type="name"
          placeholder="John"
          required
          value={name}
          onChange={nameChange}
        />

        <input
          type="email"
          placeholder="John@gmail.com"
          required
          value={email}
          onChange={emailChange}
        />
        <input
          type="password"
          placeholder="John123"
          required
          value={password}
          onChange={passwordChange}
        />
        <br></br>

        <button type="Submit" className="btn" onClick={submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
