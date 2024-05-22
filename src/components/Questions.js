import { useState } from "react";
import styles from "./Questions.module.css";
import SectionHeader from "./SectionHeader";
import { ClosetIcon } from "./Icons";
import { PlusIcon, QArrowIcon } from "./Icons";
import { useData } from "../context/DataContext";

function Questions() {
  const { questions } = useData();
  return (
    <div className={styles.questions + " container mt-5 rounded"}>
      <div className={styles.Frow + " row"}>
        <div className="col">
          <SectionHeader
            title={"Frequently Asked Questions"}
            content={
              "Still you have any questions? Contact our Team via support@skillbridge.com"
            }
          />
        </div>
        <div className={styles.col + " col"}>
          {questions.map((item, index) => {
            return (
              <Question
                question={item.question}
                answer={item.answer}
                key={index}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Question({ question, answer, id }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.row + " row"}>
      <div className="d-flex justify-content-between align-items-center">
        <h6>{question}</h6>
        <button
          className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseExample${id}`}
          aria-expanded="false"
          aria-controls={`collapseExample`}
          onClick={() => setIsOpen((s) => !s)}
        >
          {!isOpen && <PlusIcon />}
          {isOpen && <ClosetIcon width={"20px"} />}
        </button>
      </div>
      <div className="collapse" id={`collapseExample${id}`}>
        <div className={styles.card + " card card-body"}>{answer}</div>
        <div className={styles.subLink}>
          <h6>Can I enroll in multiple courses at once?</h6>
          <QArrowIcon />
        </div>
      </div>
    </div>
  );
}

export default Questions;
