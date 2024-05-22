import SectionHeader from "./SectionHeader";
import styles from "./Courses.module.css";
import { useData } from "../context/DataContext";

function Courses() {
  const { CoursesInfo } = useData();
  return (
    <div className={styles.courses + " container"}>
      <SectionHeader
        path={"courses"}
        title={"Our Courses"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      />
      <div className={styles.content}>
        {CoursesInfo.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <div className={styles.card + " card border-0"}>
      <img className="card-img-top" src={`${item?.img}`} alt="" />
      <div className="card-body">
        <div className={styles.cardInfo}>
          <div>
            <span>{item?.duration} Weeks</span>
            <span>{item?.level}</span>
          </div>
          <p>By {item?.owner}</p>
        </div>
        <div className={styles.text}>
          <div>
            <h5 className="card-title" style={{ fontWeight: "semi-bold" }}>
              {item?.name}
            </h5>
            <p className={styles.cardText + " card-text"}>{item?.title}</p>
          </div>
          <button className={styles.btn}>Get it Now</button>
        </div>
      </div>
    </div>
  );
}

export default Courses;
