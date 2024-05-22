import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import Content from "../components/selectedCourse/Content";
import Footer from "../components/Footer";
import { useData } from "../context/DataContext";

function SelectedCourse() {
  const { coursesDetails } = useData();
  const { id } = useParams();
  const course = coursesDetails.filter((item) => item.id === Number(id))[0];
  console.log(course);
  useEffect(() => {}, []);
  return (
    <>
      <NavBar />
      <Content courseInfo={course?.courseInfo} />
      <Footer />
    </>
  );
}

export default SelectedCourse;
