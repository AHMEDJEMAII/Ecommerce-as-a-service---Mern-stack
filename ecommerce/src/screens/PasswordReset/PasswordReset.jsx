import { useEffect, useState, Fragment, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import Message from "../../components/LoadingError/Error";
import Loading from "../../components/LoadingError/Loading";
import styles from "./styles.module.css";

const PasswordReset = () => {
  const [validUrl, setValidUrl] = useState(false);
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }
  const params = useParams();
  const url = `http://localhost:5000/api/users/password-reset/${params.token}`;

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
  }, [params, url]);

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
              <form onSubmit={handleSubmit}>
                <img src="https://svgshare.com/i/Jcf.svg" />
                <h2 className="title" style={{ textAlign: "center" }}>
                  Reset your password
                </h2>
                {error && <Message variant="alert-danger">{error}</Message>}

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

                <input type="submit" className="btn" value="Submit" />
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
