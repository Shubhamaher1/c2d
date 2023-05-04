import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "../HomeCss/Login.scss";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/index");
      window.location.reload(false);
    } catch (err) {
      setErr(true);
    }
  };
  return (
    
<>
<div className="bg"></div>

<div className="star-field">
<div className="layer"></div>
<div className="layer"></div>
<div className="layer"></div>
<div className="layer"></div>
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">C2D Chat</span>
        <span className=""> If you want to see without login  </span>
       <a href="/index">Skip</a>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
</div>


   
</>
  );
};
export default Login;
