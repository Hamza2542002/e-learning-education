import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import RegestrationBtn from "./RegestrationBtn";
import { RightArrowIcon } from "./Icons";
function NavBar() {
  return (
    <div className={styles.navContainer}>
      <header className={styles.header}>
        <p>Free Courses 🌟 Sale Ends Soon, Get It Now </p>
        <RightArrowIcon />
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className={styles.container}>
            <NavLink to="/" className={`${styles.logo} navbar-brand`}>
              <Logo />
            </NavLink>
            <div
              className={styles.navBar + " collapse navbar-collapse"}
              id="navbarTogglerDemo01"
            >
              <u1
                className={`${styles.navLinks} navbar-nav me-auto mb-2 mb-lg-0`}
                id="navbarNav"
              >
                <li className="nav-item">
                  <NavLink to="/" className={styles.navLink + " nav-link"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/courses"
                    className={styles.navLink + " nav-link"}
                  >
                    Courses
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/aboutus"
                    className={styles.navLink + " nav-link"}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/pricing"
                    className={styles.navLink + " nav-link"}
                  >
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className={styles.navLink + " nav-link"}
                  >
                    Contact
                  </NavLink>
                </li>
              </u1>
            </div>
          </div>
          <RegestrationBtn />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

function Logo() {
  return <img className="logo" src="/Logo.png" alt="logo" />;
}

export default NavBar;
