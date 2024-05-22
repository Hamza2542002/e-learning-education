import SectionHeader from "./SectionHeader";
import styles from "./Benefits.module.css";
import { ArrowIcon } from "./Icons";
import { useData } from "../context/DataContext";

function Benefits() {
  const { BenefitsData } = useData();
  return (
    <div className={styles.benefits + " container"}>
      <SectionHeader
        title={"Benefts"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      />
      <div className={`${styles.content} row`}>
        {BenefitsData.map((item, index) => {
          return (
            <Card
              num={index + 1}
              key={index}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

function Card({ num, title, desc }) {
  return (
    <div className={styles.card + " card border-0"}>
      <h1>0{num}</h1>
      <div className={styles.text}>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      <button className={styles.arrowbtn}>
        <ArrowIcon />
      </button>
    </div>
  );
}

export default Benefits;
