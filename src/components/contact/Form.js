import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import styles from "./Content.module.css";
export default function Form({
  dispatch,
  fName,
  lName,
  email,
  phone,
  subject,
  message,
}) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  function handleDataChange(e) {
    dispatch({ type: e.target.id, payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isAuth) navigate("/regestration/login");
    if (isAuth) {
      dispatch({ type: "message/send" });
      alert("Message Sent Successfully");
      navigate("/");
    }
  }
  return (
    <form className={styles.form + " row g-3 p-5"} onSubmit={handleSubmit}>
      <div className="col-md-6 mt-3">
        <label htmlFor="fName" className="form-label">
          First Name
        </label>
        <input
          type="fName"
          placeholder="Enter First Name"
          className="form-control"
          id="fName"
          value={fName}
          onChange={(e) => handleDataChange(e)}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="lName" className="form-label">
          Last Name
        </label>
        <input
          type="lName"
          placeholder="Enter Last Name"
          className="form-control"
          id="lName"
          value={lName}
          onChange={(e) => handleDataChange(e)}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => handleDataChange(e)}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="phone"
          placeholder="Enter your Phone"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => handleDataChange(e)}
        />
      </div>
      <div className="col-12 mt-3">
        <label htmlFor="subject" className="form-label">
          Subject
        </label>
        <input
          type="text"
          className="form-control"
          id="subject"
          placeholder="Enter the Subject"
          value={subject}
          onChange={(e) => handleDataChange(e)}
        />
      </div>
      <div className="col-12 mt-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          type="text"
          rows={5}
          cols={20}
          className="form-control"
          id="message"
          placeholder="Enter The Message..."
          value={message}
          onChange={(e) => handleDataChange(e)}
        />
      </div>
      <div className="col-12 mt-3">
        <button
          type="submit"
          className="btn"
          onClick={(e) => {
            handleDataChange(e);
          }}
        >
          Send Your Message
        </button>
      </div>
    </form>
  );
}
