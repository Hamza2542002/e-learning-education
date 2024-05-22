import styles from "./MainHero.module.css";
import { MainHeroIcon } from "./Icons";
import { useNavigate } from "react-router-dom";
function MainHero() {
  const navigate = useNavigate();
  return (
    <div className={styles.main + " main"}>
      <div className={styles.container + " container"}>
        <h1 className={styles.subContainer + " subContainer"}>
          <MainHeroIcon />
          <span>Unlock</span> Your Creative Potential
        </h1>
        <div className={styles.textContainer + " textContainer"}>
          <h2>with Online Design and Development Courses.</h2>
          <p>Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
        <div className={styles.btnContainer + " btnContainer"}>
          <button
            onClick={() => navigate("/courses")}
            className={"btn " + styles.btn}
          >
            Explore Courses
          </button>
          <button onClick={() => navigate("/pricing")} className="">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHero;
