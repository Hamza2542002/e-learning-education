import { useData } from "../context/DataContext";
import SectionHeader from "./SectionHeader";
import styles from "./Testimonials.module.css";

function Testimonials() {
  const { testimonialsData } = useData();
  return (
    <div className={styles.testimonials + " container"}>
      <SectionHeader
        title={"Our Testimonials"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      />
      <div className={styles.content + " container"}>
        {testimonialsData.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export function Card({ item }) {
  return (
    <div className={styles.card + " card border-0"}>
      <p className={styles.cardBody}>{item.message}</p>
      <div className={styles.cardFooter}>
        <div>
          <img src={`${item.img}`} alt="...." />
          <p>{item.owner}</p>
        </div>
        <button className={styles.btn}>Show Full Story</button>
      </div>
    </div>
  );
}

export default Testimonials;
