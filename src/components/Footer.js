import styles from "./Footer.module.css";
// import Logo from "./Logo";
import { MailIcon, PhoneIcon, LoactionIcon, SocialIcons } from "./Icons";
function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <div className="row">
          <div className={styles.col + " col-lg-6"}>
            <Logo />
            <ul className={styles.contact}>
              <li>
                <span>
                  <MailIcon />
                </span>
                hello@skillbridge.com
              </li>
              <li>
                <span>
                  <PhoneIcon />
                </span>
                +91 91813 23 2309
              </li>
              <li>
                <span>
                  <LoactionIcon />
                </span>
                Somewhere in the World
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Home</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-body">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#!" className="text-body">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#!" className="text-body">
                  Our Testimonials
                </a>
              </li>
              <li>
                <a href="#!" className="text-body">
                  Our FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">About Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-body">
                  Company
                </a>
              </li>
              <li>
                <a href="#!" className="text-body">
                  Achievment
                </a>
              </li>
              <li>
                <a href="#!" className="text-body">
                  Our Goals
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Social Profiles</h5>
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Logo() {
  return <img className="logo" src="/Logo.png" alt="logo" />;
}

export default Footer;
