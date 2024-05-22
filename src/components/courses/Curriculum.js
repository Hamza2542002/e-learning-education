import styles from "./Content.module.css";
export default function Curriculum({ curriculums }) {
  return (
    <div className={`${styles.curriculum} card rounded`}>
      <h5 className="card-header bg-transparent py-3">Curriculum</h5>
      <div className="card-body d-flex gap-5 flex-wrap justify-content-start py-4 px-5">
        {curriculums.map((item, index) => {
          return <CurriculumItem item={item} i={index + 1} key={index} />;
        })}
      </div>
    </div>
  );
}

function CurriculumItem({ item, i }) {
  return (
    <div>
      <h1>0{i}</h1>
      <p>{item}</p>
    </div>
  );
}
