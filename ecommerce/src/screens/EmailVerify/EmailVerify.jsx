import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../images/success.png";
import styles from "./styles.module.css";
import { Fragment } from "react/cjs/react.production.min";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:5000/api/users/verify/${param.token}`;
        const { data } = await axios.post(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      <div className={styles.container} >
        <img style={{position: 'fixed',bottom: '0',left: '0', height: '100%'}} src="https://i.postimg.cc/sDG8zyXM/wave.png" />
                  <img src="https://svgshare.com/i/JcM.svg"  style={{width: '300px'}} />

        <h1>Email verified successfully </h1>
        <Link to="/login">
          <button className={styles.green_btn} style={{color:'white'}}>Login</button>
        </Link>
      </div>
    </>
  );
};

export default EmailVerify;
