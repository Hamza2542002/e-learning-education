import { useEffect, useState } from "react";
import styles from "./Content.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export function Form({ head }) {
  const navigate = useNavigate();
  const { login, isAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(
    function () {
      if (isAuth) navigate("/");
    },
    [isAuth, navigate]
  );
  function handleSubmit(e) {
    e.preventDefault();
    login(email, password);
  }
  return (
    <>
      <form
        className={styles.form + " login-form row g-3"}
        onSubmit={handleSubmit}
      >
        <header className="text-center mb-5">
          <h1>{head}</h1>
          <p>Welcome back! Please log in to access your account.</p>
        </header>
        <div className="col-12 my-2">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your Email"
            className="form-control p-3"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-12 my-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your Password"
            className="form-control p-3"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <a
            href="asdjhh"
            className={styles.underline + " mt-2 d-block text-end"}
          >
            Forget Password?
          </a>
        </div>
        <div className={styles.check}>
          <input type="checkbox" className="me-2 " id="check" />
          <label htmlFor="check" className="text-muted">
            {head === "Login"
              ? "Remember Me"
              : "I agree with Terms of Use and Privacy Policy"}
          </label>
        </div>
        <button type="submit" className={styles.btn}>
          {head}
        </button>
        <span className={styles.afetr}></span>
      </form>
      <div className={styles.googleLogin}>
        <img className="me-2" src="Icon.png" alt="..." /> {head} with Google
      </div>
      <p className={styles.signup}>
        Dont't Have Account?{" "}
        <Link to={"/regestration/signup"} className={styles.underline}>
          Sign Up
          <img src="ArrowIcon.png" alt="..." />
        </Link>
      </p>
    </>
  );
}
