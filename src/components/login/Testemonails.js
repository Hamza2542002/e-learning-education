import { useState } from "react";
import { Card } from "../Testimonials.js";
import styles from "./Content.module.css";
import { useData } from "../../context/DataContext.js";

function Testemonails() {
  const [currentItem, setCurrentItem] = useState(0);
  const { testimonialsData } = useData();
  function handleForwordClick() {
    currentItem < testimonialsData.length - 1
      ? setCurrentItem((i) => i + 1)
      : setCurrentItem((i) => i);
  }
  function handleBackClick() {
    currentItem > 0 ? setCurrentItem((i) => i - 1) : setCurrentItem((i) => i);
  }
  return (
    <div className="d-flex flex-column align-items-end gap-2">
      <Card item={testimonialsData[currentItem]} key={0} />
      <div className="btn-group gap-2">
        <button className={styles.btn + " btn"} onClick={handleBackClick}>
          {"<-"}
        </button>
        <button className={"btn " + styles.btn} onClick={handleForwordClick}>
          {"->"}
        </button>
      </div>
    </div>
  );
}

export default Testemonails;
