import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Hostel from "./components/Hostel";
import Otp from "./components/Otp";
import About from "./components/About";
import { ReactNotifications } from "react-notifications-component";
import Help_support from "./components/Help_support";
import Privacy_policy from "./components/Privacy_policy";
import Team_members from "./components/Team_members";
import OnlineProcess from "./components/OnlineProcess";
import Forgot_password from "./components/ForgotPassword";
import Reviews from "./components/Reviews";
import Admin_Home from "./components/adminBoard/Admin_Home";
import ForgotPassword_OTP from "./components/ForgotPassword_OTP";
import EnterNewPassword from "./components/EnterNewPassword";
import HomeStyles from "./components/style_Modules/Home.module.css";
import CreateHostel from "./components/adminBoard/CreateHostel";
import Inspection from "./components/adminBoard/Inspection";

// Scroll restoration component
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return null;
}

function App() {
  return (
    <div>
      <div className={HomeStyles.parent_ramp}>
        <ReactNotifications />
        <Router>
          <ScrollToTop /> {/* Ensures scroll restoration */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Hostel" element={<Hostel />} />
            <Route path="/Otp" element={<Otp />} />
            <Route path="/About" element={<About />} />
            <Route path="/Privacy_policy" element={<Privacy_policy />} />
            <Route path="/Help_support" element={<Help_support />} />
            <Route path="/Team_member" element={<Team_members />} />
            <Route path="/OnlineProcess" element={<OnlineProcess />} />
            <Route path="/ForgotPassword" element={<Forgot_password />} />
            <Route path="/Reviews" element={<Reviews />} />
            <Route path="/AdminHome" element={<Admin_Home />} />
            <Route path="/ForgotPasswordOTP" element={<ForgotPassword_OTP />} />
            <Route path="/EnterNewPassword" element={<EnterNewPassword />} />
            <Route path="/ForgotPassword" element={<Forgot_password />} />
          </Routes>
        </Router>
      </div>
      <div className={HomeStyles.useMobileOnly_ramp}>
        <h1> "Notice: Mobile-Optimized Experience Available"</h1>
        <p>
          Our website is currently undergoing maintenance for larger screen
          sizes (e.g., desktop and tablets). For the best experience, we
          recommend using a mobile device to access our services. We apologize
          for the inconvenience and are working hard to bring you a seamless
          experience on all devices soon. Thank you for your understanding!"**.
        </p>
        <h2>PLEASE USE MOBILE DEVICE TO ACCESS THIS SITE !</h2>
      </div>



     <Router>
      <Routes>
      <Route path="/AdminHome" element={<Admin_Home />} />
      <Route path="/CreateHostel" element={<CreateHostel/>} />
      <Route path="/Inspection" element={<Inspection/>} />

      </Routes>
     </Router>



    </div>
  );
}

export default App;
