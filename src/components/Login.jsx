import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook to navigate programmatically

  function login() {
    const payload = users.find(
      (user) => user.name === username && user.password === password
    );
    if (payload) {
      dispatch({
        type: "Login",
        payload: payload,
      });
      navigate("/Products"); // Navigate to Products page after successful login
    } else {
      alert("Wrong Credentials...!!!");
    }
  }

  function nameChange(e) {
    setUsername(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="Login">
      <form
        className="Login__Form"
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <h1>Login Here</h1>
        <br />
        <input
          type="text" // Changed type to text
          placeholder="John"
          required
          value={username}
          onChange={nameChange}
        />
        <input
          type="password"
          placeholder="John123"
          required
          value={password}
          onChange={passwordChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
