import styles from "./Content.module.css";
import Questions from "../Questions";
import Buttons from "./Buttons";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <Buttons />
        <div className={styles.content + " container p-5"}>
          <Outlet />
        </div>
      </div>
      <Questions />
    </div>
  );
}

export default Content;
