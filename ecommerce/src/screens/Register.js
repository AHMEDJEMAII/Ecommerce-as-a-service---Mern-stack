import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../Redux/Actions/userActions";
import Header from "./../components/Header";

const Register = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setCPassword] = useState("");


  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, success,} = userRegister;
  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password,confirmPassword))
  };

  return (
    <>
      {/* <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <input
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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

          <button type="submit">Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div> */}


       
      



      <img className="wave" src="https://i.postimg.cc/sDG8zyXM/wave.png" />
      <div className="container-form">
        <div className="img">
          <img src="https://svgshare.com/i/JcM.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={submitHandler}>
            <img src="https://svgshare.com/i/Jcf.svg" />
            <h2 className="title">Register your account</h2>
            {error && <Message variant="alert-danger">{error}</Message>}
            {success && <Message variant="alert-danger">Please verify mail</Message>}
            {loading && <Loading />}
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-envelope"></i>
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
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
              </div>
              </div>
            <Link to={redirect ? `/index?redirect=${redirect}` : "/index"}>
              <a href="#">Forgot Password?</a>
            </Link>
            <input type="submit" className="btn" value="Register" />
            <Link
              to={redirect ? `/login?redirect=${redirect}` : "/login"}
            >
              <a href="/login" style={{ float: "left" }}>
                Login into your account
              </a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
