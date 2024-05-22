import { Outlet } from "react-router-dom";
import styles from "./Content.module.css";
import Head from "./Head";
import Testemonails from "./Testemonails";

function Content() {
  return (
    <div
      className={
        styles.content +
        " container row mx-auto d-flex justify-content-between align-items-center py-5"
      }
    >
      <div className="test d-flex flex-column align-items-start gap-5 col-lg-6 col-sm-11">
        <Head />
        <Testemonails />
      </div>
      <div className={styles.foromContainer + " col-lg-5 col-sm-11 rounded"}>
        <Outlet />
      </div>
    </div>
  );
}

export default Content;
