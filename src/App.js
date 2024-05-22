import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import "./index.css";
import SelectedCourse from "./pages/SelectedCourse";
import About from "./pages/About";
import Princing from "./pages/Pricing";
import MonthlyPlanes from "./components/pricing/MonthlyPlanes";
import YearlyPlanes from "./components/pricing/YearlyPlanes";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Pricing from "./components/Pricing";
import { Form } from "./components/login/Form";
import SignupForm from "./components/signup/SignupForm";
import { DataProvider } from "./context/DataContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Navigate replace to={"monthly"} />} />
              <Route path="monthly" element={<Pricing type="month" />} />
              <Route path="yearly" element={<Pricing type="year" />} />
            </Route>
            <Route path="/courses/:id" element={<SelectedCourse />} />
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="aboutus" element={<About />} />
            <Route path="pricing" element={<Princing />}>
              <Route index element={<Navigate replace to={"monthly"} />} />
              <Route path="monthly" element={<MonthlyPlanes />} />
              <Route path="yearly" element={<YearlyPlanes />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="regestration" element={<Login />}>
              <Route index element={<Navigate replace to={"login"} />} />
              <Route path="login" element={<Form head={"Login"} />} />
              <Route path="signup" element={<SignupForm head={"Sign Up"} />} />
            </Route>
          </Routes>
        </Router>
      </DataProvider>
    </AuthProvider>
  );
}

export default App;
