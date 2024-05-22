import styles from "./Content.module.css";
import { useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import Hero from "../courses/Hero";
import { useData } from "../../context/DataContext";
function Content() {
  const { coursesDetails } = useData();
  const { id } = useParams();
  const courseInfo = coursesDetails.filter((item) => item.id === Number(id))[0]
    ?.courseInfo;
  return (
    <>
      <Hero title={courseInfo?.courseName} desc={courseInfo?.courseDesc} />
      <div className={styles.content}>
        <div className="container">
          <img className="img-fluid" src="/Container.png" alt="...." />
        </div>
        <div className={"container mx-auto d-grid my-5 " + styles.grid}>
          {courseInfo.sections.map((item, index) => {
            return (
              <CourseCard
                sectionNum={index + 1}
                sectoinTitle={item.name}
                lectures={item.lectures}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Content;
