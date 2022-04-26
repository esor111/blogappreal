import { loginStart, loginSuccess, loginfaliure } from "../../redux/userRedux";

import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { publicRequest } from "../../requestMethod";
import { useState } from "react";
export default function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const loginHandler = async () => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("/auth/login", {
        username,
        password,
      });

      dispatch(loginSuccess(res.data));
      window.location.replace("/")
    } catch (err) {
      dispatch(loginfaliure());
    }
  };

  return (
    <div className="login" onSubmit={submitHandler}>
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" onClick={loginHandler} type="submit">
          Login
        </button>
      </form>
      <Link to="/register"> 
      <button className="loginRegisterButton" type="submit">
        Register
      </button>
      </Link>
    </div>
  );
}

// import "./login.css";

// export default function Login() {
//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form className="loginForm">
//         <label>Email</label>
//         <input className="loginInput" type="text" placeholder="Enter your email..." />
//         <label>Password</label>
//         <input className="loginInput" type="password" placeholder="Enter your password..." />
//         <button className="loginButton">Login</button>
//       </form>
//         <button className="loginRegisterButton">Register</button>
//     </div>
//   );
// }
