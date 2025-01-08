// import React, { useState } from "react";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import { baseUrl } from "./Config";
// import LoginStyles from "./style_Modules/Login.module.css";
// import axios from "axios";
// import Notify from "./Notify";
// import { Vortex } from "react-loader-spinner";
// import ForgotPasswordStyles from "../components/style_Modules/Forgot_password.module.css";
// import { useNavigate } from "react-router-dom";

// function ForgotPassword() {
//   const [signUpSpinner, setSignUpSpinner] = useState(false);
//   const [forgotPassword, setForgotPassword] = useState("");
//   const navigate = useNavigate();
//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setSignUpSpinner(true)

//     try {
//       const fd = new FormData();
//       fd.append("Email", forgotPassword);
//       // Define the API URL
//       const url = `${baseUrl}/student/forgotPassword/sendOtp`;
//       // Send the request
//       const response = await axios.post(url, fd);
//       // Check response and notify user
//       if (response.data.Error === false) {
//         Notify({
//           title: "success",
//           message: "OTP sent successfully",
//           type: "success",
//         });
//         navigate("/ForgotPasswordOTP",{state:{forgotPassword}});
//       } else {
//         Notify({
//           title: "Error",
//           message: response.data.Error || "An unexpected error occurred",
//           type: "danger",
//         });
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.Error || error.message || "An error occurred";
//       Notify({
//         title: "Error",
//         message: errorMessage,
//         type: "danger",
//       });
//     }
//     finally{
//       setSignUpSpinner(false)
//     }
//   };

//   return (
//     <div className={ForgotPasswordStyles.parent_ramp}>
//       <NavBar />
//       <div className={ForgotPasswordStyles.forgotPassword_ramp}>
//         <h3>Reset Password</h3>
//         <p>
//           To reset your password, enter the email address linked to your
//           account.
//         </p>
//         <form onSubmit={handleResetPassword}>
//           <input
//           disabled={signUpSpinner}
//             value={forgotPassword}
//             onChange={(e) => setForgotPassword(e.target.value)}
//             placeholder="Enter Your Email"
//             type="text"
//           />

// <div>
//           <button disabled={signUpSpinner} type="submit">Submit</button>
//         </div>
//         </form>

//       </div>

//       {signUpSpinner && (
//         <section className={ForgotPasswordStyles.spinner}>
//           <div>Loading.....</div>{" "}
//           <Vortex
//             visible={true}
//             height="50"
//             ariaLabel="vortex-loading"
//             wrapperStyle={{}}
//             wrapperClass="vortex-wrapper"
//             colors={["red", "green", "blue", "yellow", "orange", "purple"]}
//           />
//         </section>
//       )}
//     </div>
//   );
// }

// export default ForgotPassword;











import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { baseUrl } from "./Config";
import LoginStyles from "./style_Modules/Login.module.css";
import axios from "axios";
import Notify from "./Notify";
import { Vortex } from "react-loader-spinner";
import ForgotPasswordStyles from "../components/style_Modules/Forgot_password.module.css";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [signUpSpinner, setSignUpSpinner] = useState(false);
  const [forgotPassword, setForgotPassword] = useState("");
  const [banEndTime, setBanEndTime] = useState(null);
  const [remainingTime, setRemainingTime] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBanEndTime = localStorage.getItem("forgotPasswordBanEndTime");
    if (storedBanEndTime) {
      const parsedEndTime = new Date(storedBanEndTime);
      if (parsedEndTime > new Date()) {
        setBanEndTime(parsedEndTime);
        calculateRemainingTime(parsedEndTime);
      } else {
        localStorage.removeItem("forgotPasswordBanEndTime");
      }
    }
  }, []);

  useEffect(() => {
    if (banEndTime) {
      const interval = setInterval(() => {
        calculateRemainingTime(banEndTime);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [banEndTime]);

  const calculateRemainingTime = (endTime) => {
    const now = new Date();
    const diff = endTime - now;
    if (diff > 0) {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setRemainingTime(`${hours}h ${minutes}m ${seconds}s`);
    } else {
      setRemainingTime(null);
      setBanEndTime(null);
      localStorage.removeItem("forgotPasswordBanEndTime");
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    const resendCountKey = `resendCount_${forgotPassword}`;
    const resendCount = parseInt(localStorage.getItem(resendCountKey)) || 0;

    if (banEndTime) {
      Notify({
        title: "Error",
        message: `You must wait ${remainingTime} before requesting another OTP`,
        type: "danger",
      });
      return;
    }

    if (resendCount >= 2) {
      const banTime = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);
      setBanEndTime(banTime);
      localStorage.setItem("forgotPasswordBanEndTime", banTime);
      localStorage.removeItem(resendCountKey);
      Notify({
        title: "Error",
        message: "You have exceeded the allowed attempts. Please wait 3 hours before trying again.",
        type: "danger",
      });
      return;
    }

    setSignUpSpinner(true);
    try {
      const fd = new FormData();
      fd.append("Email", forgotPassword);
      const url = `${baseUrl}/student/forgotPassword/sendOtp`;
      const response = await axios.post(url, fd);

      if (response.data.Error === false) {
        Notify({
          title: "success",
          message: "OTP sent successfully",
          type: "success",
        });
        localStorage.setItem(resendCountKey, resendCount + 1);
        navigate("/ForgotPasswordOTP", { state: { forgotPassword } });
      } else {
        Notify({
          title: "Error",
          message: response.data.Error || "An unexpected error occurred",
          type: "danger",
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.Error || error.message || "An error occurred";
      Notify({
        title: "Error",
        message: errorMessage,
        type: "danger",
      });
    } finally {
      setSignUpSpinner(false);
    }
  };

  return (
    <div className={ForgotPasswordStyles.parent_ramp}>
      <NavBar />
      <div className={ForgotPasswordStyles.forgotPassword_ramp}>
        <h3>Reset Password</h3>
        <p>
          To reset your password, enter the email address linked to your
          account.
        </p>
        <form onSubmit={handleResetPassword}>
          <input
            disabled={signUpSpinner || banEndTime}
            value={forgotPassword}
            onChange={(e) => setForgotPassword(e.target.value)}
            placeholder="Enter Your Email"
            type="text"
          />

          <div>
            <button disabled={signUpSpinner || banEndTime} type="submit">
              Submit
            </button>
          </div>
        </form>
        {banEndTime && (
          <p className={ForgotPasswordStyles.ban_message}>
            You must wait {remainingTime} before requesting another OTP.
          </p>
        )}
      </div>

      {signUpSpinner && (
        <section className={ForgotPasswordStyles.spinner}>
          <div>Loading.....</div>{" "}
          <Vortex
            visible={true}
            height="50"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </section>
      )}
    </div>
  );
}

export default ForgotPassword;






















