import NavBar from "../components/NavBar";
import Hero from "../components/courses/Hero";
import Content from "../components/contact/Content";
import Footer from "../components/Footer";
function Contact() {
  return (
    <>
      <NavBar />
      <Hero
        title={"Contact Us"}
        desc={
          "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        }
      />
      <div className="container">
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
