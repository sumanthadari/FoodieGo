import React, { useState, useEffect } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrentState] = useState("Login");
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user");
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    try {
      // Make a POST request to your login endpoint with email and password
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // If login successful, do something (e.g., redirect to dashboard)
        console.log("Login successful");
      } else {
        // If login fails, handle the error (e.g., show error message)
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleSignup = async () => {
    try {
      // Make a POST request to your signup endpoint with name, email, and password
      const response = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // If signup successful, do something (e.g., redirect to dashboard)
        console.log("Signup successful");
      } else {
        // If signup fails, handle the error (e.g., show error message)
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="login-popup">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form className="login-popup-container">
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="login-popup-inputs">
            {currState === "Login" ? null : (
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={currState === "Login" ? handleLogin : handleSignup}>
            {currState === "Sign up" ? "Create account" : "Login"}
          </button>
          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          <p>
            {currState === "Login" ? (
              <span onClick={() => setCurrentState("Sign up")}>
                Create a new account? Click here
              </span>
            ) : (
              <span onClick={() => setCurrentState("Login")}>
                Already have an account? Click here
              </span>
            )}
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
