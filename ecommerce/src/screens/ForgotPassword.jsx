import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

const PasswordReset = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const param = useParams();
  console.log(param);
  const url = `http://localhost:5000/api/users/password-reset/${param.token}`;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register( password,setPassword))
  };
  useEffect(() => {
    const verifyUrl = async () => {
      try {
        // await axios.get(url);
        setValidUrl(true);
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyUrl();
  }, [param, url]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      const { data } = await axios.post(url, { password });
      setMsg(data.message);
      setError("");
      window.location = "/login";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
        setMsg("");
      }
    }
  };

  return (
    <Fragment>
      {validUrl ? (
        <>
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
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                  </div>
                </div>

                <input type="submit" className="btn" value="Submit" />
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
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default PasswordReset;
