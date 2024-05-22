import { useReducer } from "react";
import styles from "./Content.module.css";
import Form from "./Form";
import Contacts from "./Contacts";
import { MailIcon, PhoneIcon, LoactionIcon, SocialIcons } from "../Icons";

const contactInfo = [
  {
    icon: <MailIcon />,
    mess: "hello@skillbridge.com",
  },
  {
    icon: <PhoneIcon />,
    mess: "+91 91813 23 2309",
  },
  {
    icon: <LoactionIcon />,
    mess: "Somewhere in the World",
  },
  {
    icon: <SocialIcons />,
    mess: "Social Profiles",
  },
];

const inintialData = {
  fName: "",
  lName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function reduce(state, action) {
  switch (action.type) {
    case "fName":
      return {
        ...state,
        fName: action.payload,
      };
    case "lName":
      return {
        ...state,
        lName: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    case "phone":
      return {
        ...state,
        phone: action.payload,
      };
    case "subject":
      return {
        ...state,
        subject: action.payload,
      };
    case "message":
      return {
        ...state,
        message: action.payload,
      };
    case "message/send":
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}

function Content() {
  const [{ fName, lName, email, phone, subject, message }, dispatch] =
    useReducer(reduce, inintialData);
  return (
    <div className={styles.content + " container"}>
      <Form
        dispatch={dispatch}
        fName={fName}
        lName={lName}
        email={email}
        subject={subject}
        message={message}
        phone={phone}
      />
      <Contacts contactInfo={contactInfo} />
    </div>
  );
}

export default Content;
