import { useData } from "../../context/DataContext";
import Hero from "../courses/Hero";
import AboutCrad from "./AboutCrad";
import CTA from "./CTA";

function Content() {
  const { aboutData } = useData();
  return (
    <div>
      <Hero
        title={"About Skillbridge"}
        desc={
          "Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
        }
      />
      <AboutCrad data={aboutData.achievments} />
      <AboutCrad data={aboutData.goals} />
      <CTA />
    </div>
  );
}

export default Content;
