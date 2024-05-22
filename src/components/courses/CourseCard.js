import styles from "./Content.module.css";
import CourseInfo from "./CourseInfo";
import { CourseHeader } from "./Content";
import Curriculum from "./Curriculum";
export default function CourseCard({ item }) {
  return (
    <div className={`${styles.card} card rounded border-0`}>
      <CourseHeader name={item?.name} id={item?.id} title={item?.title} />
      <CourseInfo
        images={item?.images}
        duration={item?.duration}
        level={item?.level}
        owner={item?.owner}
      />
      <Curriculum curriculums={item?.curriculum} />
    </div>
  );
}
