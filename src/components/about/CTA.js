import styles from "./CTA.module.css";
function CTA() {
  return (
    <div className={`px-5 ${styles.cta} container`}>
      <div className={styles.text + " py-5 pe-0"}>
        <h1>
          <span>Together</span>, let's shape the future of digital innovation
        </h1>
        <p className="text-muted">
          Join us on this exciting learning journey and unlock your potential in
          design and development.
        </p>
      </div>
      <div className={styles.img}></div>
      <button className={styles.btn + " btn text-light"}>Join Now</button>
    </div>
  );
}

export default CTA;
