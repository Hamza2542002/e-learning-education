import styles from "./Content.module.css";
export default function CourseInfo({ images, duration, level, owner }) {
  return (
    <div className={styles.info}>
      <div className="d-flex row wrap my-5">
        <img src={images[0]} className="col-4 rounded img-fluid" alt="..." />
        <img src={images[1]} className="col-4 rounded img-fluid" alt="..." />
        <img src={images[2]} className="col-4 rounded img-fluid" alt="..." />
      </div>
      <div className="card-body  padding-0">
        <div className={styles.cardInfo}>
          <div>
            <span>{duration} Weeks</span>
            <span>{level}</span>
          </div>
          <p>By {owner}</p>
        </div>
      </div>
    </div>
  );
}
