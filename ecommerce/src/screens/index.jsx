import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:5000/api/users/password-reset`;
      const { data } = await axios.post(url, { email });
      setMsg(data.message);
      setError("");
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
    <>
      <img className="wave" src="https://i.postimg.cc/sDG8zyXM/wave.png" />
      <div className="container-form">
        <div className="img">
          <img src="https://svgshare.com/i/JcM.svg" />
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src="https://svgshare.com/i/Jcf.svg" />
            <h2 className="title">Forgot Password</h2>
            {error && <Message variant="alert-danger">{error}</Message>}
            {msg && <div className={styles.success_msg}>{msg}</div>}
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <input
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <input type="submit" className="btn" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
