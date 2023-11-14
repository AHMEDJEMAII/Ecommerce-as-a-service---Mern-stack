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
      <img className="wave" style={{position: 'fixed',bottom: '0',left: '0', height: '100%'}} src="https://i.postimg.cc/fLkWvSSg/wave.png" />
      <div className="container-form" style={{  width: '100vw',height: '100vh',display: 'grid',gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '7rem',
  padding: '0 2rem'}}  >
        <div className="img"  style={{  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'}}>
          <img src="https://svgshare.com/i/JcM.svg"  style={{width: '300px'}} />
        </div>
        <div className="login-content" style={{  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'center'}}>
          <form onSubmit={submitHandler}  style={{  width: '360px'}}>
            <img src="https://svgshare.com/i/Jcf.svg" style={{width: '100px'}}/>
            <h2 className="title" style={{margin: '15px 0',
  color:'#fff',
  textTransform: 'uppercase',
  fontSize: '2.9rem'}} >Welcome Admin dans votre espace dashbord  </h2>
            {error && <Message variant="alert-danger">{error}</Message>}
            {loading && <Loading />}
            <div className="input-div  " style={{  position: 'relative',
  display: 'grid',
  gridTemplateColumns: '7% 93%',
  margin: '25px 0',
  padding: '5px 0',
  borderBottom: '2px solid #d9d9d9',
  marginTop: '40'

}}>
              <div className="i" style={{  color: '#d9d9d9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'}}>
                <i className="fas fa-user" style={{  transition: "0.3s"
}}></i>
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
          
            <input type="submit" className="btnnnn" value="Login" />
          
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
