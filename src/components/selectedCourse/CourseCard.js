import LectuseInfo from "./LectuseInfo";
export default function CourseCard({ sectionNum, sectoinTitle, lectures }) {
  return (
    <div className="card p-4 rounded col">
      <h1 className="card-head fw-bold text-end">
        {sectionNum <= 9 ? `0${sectionNum}` : sectionNum}
      </h1>
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-head fw-bold fs-3">{sectoinTitle}</p>
        <ul className="p-0">
          {lectures.map((lecture, index) => {
            return (
              <LectuseInfo
                key={index}
                name={lecture.lecName}
                duration={lecture.lecDuration}
                nummber={index + 1}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
