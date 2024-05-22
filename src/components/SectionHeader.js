import { Link } from "react-router-dom";
import styles from "./SectionHeader.module.css";
function SectionHeader({ title, content, path }) {
  return (
    <header className={"container " + styles.header}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
      {title !== "Our Pricing" && title !== "Frequently Asked Questions" && (
        <Link to={`/${path}`} className={styles.btn}>
          View All
        </Link>
      )}
      {title === "Our Pricing" && (
        <div
          className="btn-group"
          style={{ gap: "10px", backgroundColor: "white", padding: "10px" }}
        >
          <Link
            to={"/monthly"}
            className={styles.btn}
            style={{ backgroundColor: "rgb(255 149 0 / 91%)" }}
          >
            Monthly
          </Link>
          <Link className={styles.btn} to={"/yearly"}>
            Yearly
          </Link>
        </div>
      )}
      {title === "Frequently Asked Questions" && (
        <button className={styles.btn}>See All FAQ’s</button>
      )}
    </header>
  );
}

export default SectionHeader;
