import styles from "./RegestrationBtn.module.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function RegestrationBtn() {
  const navigate = useNavigate();
  const { isAuth, logout } = useAuth();
  return (
    <div className={styles.btnContainer}>
      {isAuth ? (
        <button
          className={styles.btn}
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      ) : (
        <>
          <button onClick={() => navigate("/regestration/signup")} className="">
            Sign Up
          </button>
          <button
            onClick={() => navigate("/regestration/login")}
            className={styles.btn}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}
