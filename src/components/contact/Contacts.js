import styles from "./Content.module.css";
export default function Contacts({ contactInfo }) {
  return (
    <div
      className={
        styles.contacts + " d-flex flex-column align-items-stretch p-5 gap-4"
      }
    >
      {contactInfo.map((item, index) => {
        return <Card key={index} icon={item.icon} mess={item.mess} />;
      })}
    </div>
  );
}

function Card({ icon, mess }) {
  console.log(icon);
  return (
    <div className={styles.card + " text-center d-flex flex-column p-3 gap-4"}>
      <span>{icon}</span>
      <span className={styles.mes}>{mess}</span>
    </div>
  );
}
