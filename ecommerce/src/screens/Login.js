import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import Header from "./../components/Header";
import { login } from "./../Redux/Actions/userActions";
import "../LoginPage.css";
const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <>
      {/* <form
          classNameName="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p>
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Create Account
            </Link>
          </p>
          <p>
            <Link to={redirect ? `/index?redirect=${redirect}` : "/index"}>
              FORGET PASSWORD
            </Link>
          </p>
        </form> */}
      <img className="wave" src="https://i.postimg.cc/sDG8zyXM/wave.png" />
      <div className="container-form">
        <div className="img">
          <img src="https://svgshare.com/i/JcM.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={submitHandler}>
            <img src="https://svgshare.com/i/Jcf.svg" />
            <h2 className="title">Welcome</h2>
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="password"
                  placeholder="Password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <Link to={redirect ? `/index?redirect=${redirect}` : "/index"}>
              <a href="#">Forgot Password?</a>
            </Link>
            <input type="submit" className="btn" value="Login" />
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              <a href="#" style={{ float: "left" }}>
                Create Account
              </a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
