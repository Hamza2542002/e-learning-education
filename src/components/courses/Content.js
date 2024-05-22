import styles from "./Content.module.css";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { useData } from "../../context/DataContext";

function Content() {
  const { CoursesInfo } = useData();
  console.log(CoursesInfo);
  return (
    <div className="container">
      {CoursesInfo.map((item, index) => {
        return <CourseCard item={item} key={index} />;
      })}
    </div>
  );
}

export function CourseHeader({ name, title, id }) {
  return (
    <header
      className={
        "d-flex justify-content-between align-items-end flex-wrap " +
        styles.header
      }
    >
      <div className={styles.text}>
        <h5>{name}</h5>
        <p>{title}</p>
      </div>
      <Link to={`${id}`} className="btn btn-light">
        View Course
      </Link>
    </header>
  );
}

export default Content;
