import SectionHeader from "./SectionHeader";
import styles from "./Pricing.module.css";
import { RightIcon, ClosetIcon } from "./Icons";
import MonthlyPlanes from "./pricing/MonthlyPlanes";
import YearlyPlanes from "./pricing/YearlyPlanes";

function Pricing({ type }) {
  return (
    <div className={styles.pricing + " container"}>
      <SectionHeader
        title={"Our Pricing"}
        content={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      />
      <div className={styles.content}>
        {type === "month" ? <MonthlyPlanes /> : <YearlyPlanes />}
      </div>
    </div>
  );
}

export function Card({ features, price, type, plan }) {
  return (
    <div className={styles.card + " card border-0"}>
      <div className={styles.cardHeader}>{type}</div>
      <div className="card-body">
        <h1 className={styles.price}>
          ${price}
          <span>/{plan}</span>
        </h1>
        <Features features={features} />
      </div>
    </div>
  );
}

function Features({ features }) {
  return (
    <div className={styles.feature}>
      <p>Available Features</p>
      <ul>
        {features?.map((item, index) => {
          return (
            <li key={index}>
              {item.allowed ? <RightIcon /> : <ClosetIcon />}
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
      <button className={styles.btn}>Get Started</button>
    </div>
  );
}

export default Pricing;
