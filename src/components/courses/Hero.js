import styles from "./Hero.module.css";
function Hero({ title, desc }) {
  return (
    <div className={`${styles.hero} container`}>
      <h1>{title || "Online Courses on Design and Development"}</h1>
      <p className="text-muted">
        {desc ||
          `Welcome to our online course page, where you can enhance your skills in
        design and development. Choose from our carefully curated selection of
        10 courses designed to provide you with comprehensive knowledge and
        practical experience. Explore the courses below and find the perfect fit
        for your learning journey.`}
      </p>
    </div>
  );
}

export default Hero;
