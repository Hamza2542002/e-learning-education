import Header from "./Header";
import styles from "./AboutCard.module.css";

function AboutCrad({ data }) {
  return (
    <div className="container py-5">
      <Header title={data.headTitle} content={data.headContent} />
      <div className={styles.content + " row"}>
        {data.List.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              mes={item.mes}
              icon={item.IconPath}
            />
          );
        })}
      </div>
    </div>
  );
}

function Card({ title, mes, icon }) {
  return (
    <div className={styles.card + " card p-4 rounded border-0"}>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25px"
          viewBox="0 0 576 512"
        >
          <path fill="#FFD43B" d={icon} />
        </svg>
      </span>
      <div className={styles.text}>
        <h5>{title}</h5>
        <p className="text-muted">{mes}</p>
      </div>
    </div>
  );
}

export default AboutCrad;
