import NavBar from "../components/NavBar";
import Content from "../components/pricing/Content";
import Hero from "../components/courses/Hero";
import Footer from "../components/Footer";

function Pricing() {
  return (
    <div>
      <NavBar />
      <Hero
        title={"Our Pricings"}
        desc={
          "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        }
      />
      <Content />
      <Footer />
    </div>
  );
}

export default Pricing;
