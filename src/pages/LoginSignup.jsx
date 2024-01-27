import React, { useState } from "react";
import { useHistory } from "react-router";
import useStore from "../store";
import { Github, Google, Facebook } from "react-bootstrap-icons";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const initialForm = {
  email: "",
  password: "",
};

const initialSignForm = {
  username: "",
  email: "",
  password: "",
};

const LoginSignup = (props) => {
  const { setAuthenticatedUser } = props;

  const [isSignIn, setIsSignIn] = useState(true);

  const setUser = useStore((store) => store.setUser);
  const user = useStore((store) => store.user);

  const loginUrl = useStore((store) => store.loginUrl);
  const signupUrl = useStore((store) => store.signupUrl);

  const history = useHistory();

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setError(""); // Clear error on form toggle
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleLoginSubmit(event) {
    event.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    };

    fetch(loginUrl, fetchOptions)
      .then((res) => {
        if (res.status === 401) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        const token = data.token;

        console.log("Inside Login Fetch: ", { token });

        if (token) {
          const user = jwtDecode(token);

          setAuthenticatedUser(user);

          localStorage.setItem("token", token);

          setUser(initialForm);

          history.push("/cart");
        }
      })
      .catch((error) => {
        console.error("[ERROR]: ", error);
      });
  }

  function handleSignUpSubmit(event) {
    event.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    };

    fetch(signupUrl, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;

        console.log("Inside Signup Fetch: ", { token });

        if (token) {
          const user = jwtDecode(token);

          setAuthenticatedUser(user);

          localStorage.setItem("token", token);

          setUser(initialSignForm);

          history.push("/cart");
        }
      });
  }
  return (
    <div className="login-signup">
      <div className={`container ${isSignIn ? "" : "active"}`} id="container">
        <div className={`form-container ${isSignIn ? "sign-in" : "sign-up"}`}>
          <form
            method="post"
            onSubmit={isSignIn ? handleLoginSubmit : handleSignUpSubmit}
          >
            <h1>{isSignIn ? "Sign In" : "Create Account"}</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <Google />
              </a>
              <a href="#" className="icon">
                <Facebook />
              </a>
              <a href="#" className="icon">
                <Github />
              </a>
            </div>
            <span>
              {isSignIn
                ? "or use your username and password"
                : "or use your email for registration"}
            </span>
            {!isSignIn && (
              <input
                type="text"
                placeholder="Username"
                value={user.username}
                name="username"
                onChange={handleChange}
              />
            )}
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              name="password"
              onChange={handleChange}
            />
            {!isSignIn && <button type="submit">Sign Up</button>}
            {isSignIn && (
              <>
                <a href="#">Forget Your Password?</a>
                <button type="submit">Sign In</button>
              </>
            )}
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div
              className={`toggle-panel ${
                isSignIn ? "toggle-left" : "toggle-right"
              }`}
            >
              <h1>{isSignIn ? "Welcome Back!" : "Hello, Friend!"}</h1>
              <p>
                {isSignIn
                  ? "Enter your personal details to use all site features"
                  : "Register with your personal details to use all site features"}
              </p>
              <button className="hidden" onClick={toggleForm}>
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div
              className={`toggle-panel ${
                isSignIn ? "toggle-right" : "toggle-left"
              }`}
            >
              <h1>{isSignIn ? "Hello, Friend!" : "Welcome Back!"}</h1>
              <p>
                {isSignIn
                  ? "Register with your personal details to use all site features"
                  : "Enter your personal details to use all site features"}
              </p>
              <button className="hidden" onClick={toggleForm}>
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
