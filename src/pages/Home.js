import { Outlet } from "react-router-dom";
import Benefits from "../components/Benefits";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import MainHero from "../components/MainHero";
import NavBar from "../components/NavBar";
import Questions from "../components/Questions";
import Sponsers from "../components/Sponsers";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <div className="">
      <NavBar />
      <MainHero />
      <Sponsers />
      <Benefits />
      <Courses />
      <Testimonials />
      <Outlet />
      <Questions />
      <Footer />
    </div>
  );
}

export default Home;
