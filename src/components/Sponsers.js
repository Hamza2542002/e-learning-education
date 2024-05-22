import styles from "./Sponsers.module.css";

const SponsersData = [
  "asstes/sponsers/Card.png",
  "asstes/sponsers/Card (1).png",
  "asstes/sponsers/Card (2).png",
  "asstes/sponsers/Card (3).png",
  "asstes/sponsers/Card (4).png",
  "asstes/sponsers/Card (5).png",
  "asstes/sponsers/Card (6).png",
];

function Sponsers() {
  return (
    <div className={`${styles.sponsers} container`}>
      {SponsersData.map((src, index) => (
        <Card src={src} key={index} />
      ))}
    </div>
  );
}

function Card({ src }) {
  return (
    <div className="card border-0">
      <img src={src} alt={src} />
    </div>
  );
}

export default Sponsers;
