import styles from "./Content.module.css";
import { NavLink, useNavigate } from "react-router-dom";
export default function Buttons() {
  const navigate = useNavigate();
  return (
    <div className={`${styles.btnGroup} btn-group`}>
      <NavLink
        onClick={() => navigate("monthly")}
        to={"monthly"}
        className={styles.btn + ""}
      >
        Monthly
      </NavLink>
      <NavLink
        onClick={() => navigate("yearly")}
        to={"yearly"}
        className={styles.btn + ""}
      >
        Yearly
      </NavLink>
    </div>
  );
}
