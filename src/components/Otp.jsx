// import React, { useState } from "react";
// import NavBar from "./NavBar";
// import OtpStyles from "../components/style_Modules/Otp.module.css";
// import { FaMobileRetro } from "react-icons/fa6";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
// import { baseUrl } from "./Config";
// import axios from "axios";
// import Notify from "./Notify";
// import { Vortex } from "react-loader-spinner";
// import { useEffect } from "react";

// function Otp() {
//   const navigate = useNavigate();
//   const [signUpSpinner, setSignUpSpinner] = useState(false);
//   const [otpInput, setOtpInput] = useState();


//   const location = useLocation();
//   const email = location.state?.email;

//   const handleOtpSubmission = async (e) => {
//     e.preventDefault();
//     // Show the loading spinner
//     setSignUpSpinner(true);

//     try {
//       const fd = new FormData();
//       fd.append("OTP", otpInput);
//       // Define the API URL
//       const url = `${baseUrl}/student/register/verifyOtp?email=${email}`;
//       // Send the request
//       const response = await axios.post(url, fd);
//       // Check response and notify user
//       if (response.data.Error === false) {
//         Notify({
//           title: "success",
//           message: "OTP verified successfully",
//           type: "success",
//         });
//         navigate("/Login");
//       } else {
//         Notify({
//           title: "Error",
//           message: response.data.Error || "An unexpected error occurred",
//           type: "danger",
//         });
//         navigate("/Login");
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.Error || error.message || "An error occurred";
//       Notify({
//         title: "Error",
//         message: errorMessage,
//         type: "danger",
//       });
//       navigate("/Login");
//     } finally {
//       // Hide the spinner
//       setSignUpSpinner(false);
//     }
//   };

//   const handleSendOTP = async (email) => {
//     setSignUpSpinner(true);
//     try {
//       const url = `${baseUrl}/student/register/sendOtp?email=${email}`;
//       const OTPResponse = await axios.get(url);
//       if (OTPResponse.data.Error === false) {
//         Notify({
//           title: "success",
//           message: "OTP sent successfully",
//           type: "success",
//         });
//         navigate("/Otp", { state: { email } });
//       } else {
//         Notify({
//           title: "Error",
//           message: response.data.Error || "An unexpected error occurred",
//           type: "danger",
//         });
//         navigate("/Login");
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.Error || error.message || "An error occurred";
//       Notify({
//         title: "Error",
//         message: errorMessage,
//         type: "danger",
//       });
//       navigate("/Login");
//     } finally {
//       setSignUpSpinner(false);
//     }
//   };
//   return (
//     <div>
//       <NavBar />
//       <form onSubmit={handleOtpSubmission}>
//         <div className={OtpStyles.ramp}>
//           <div className={OtpStyles.mobile_logo}>{/* <FaMobileRetro /> */}</div>

//           <div className={OtpStyles.designA}>
//             <div className={OtpStyles.container_div}>
//               <div className={OtpStyles.enter_otp}>
//                 Enter the OTP sent to your email address
//               </div>

//               <div className={OtpStyles.otp_input}>
//                 <input
//                   maxLength="4"
//                   placeholder="Enter OTP"
//                   value={otpInput}
//                   name="otpInput"
//                   onChange={(e) => setOtpInput(e.target.value)}
//                   type="text"
//                 />
//               </div>

//               <div className={OtpStyles.not_receive_otp}>
//                 Don't receive an OTP ?
//               </div>
              
//                 <button
//                   onClick={() => {
//                     handleSendOTP(email);
//                   }}
//                   className={OtpStyles.resend}
//                 >
//                   Resend
//                 </button> 
              
            
//               <div className={OtpStyles.otp_submit_btn_div}>
//                 <button type="submit">Submit</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>

//       {signUpSpinner && (
//         <section className={OtpStyles.spinner}>
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

// export default Otp;












import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import OtpStyles from "../components/style_Modules/Otp.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { baseUrl } from "./Config";
import axios from "axios";
import Notify from "./Notify";
import { Vortex } from "react-loader-spinner";

function Otp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [signUpSpinner, setSignUpSpinner] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [resendCount, setResendCount] = useState(0);
  const [banEndTime, setBanEndTime] = useState(null);
  const [banCountdown, setBanCountdown] = useState("");

  const email = location.state?.email;

  useEffect(() => {
    const banData = JSON.parse(localStorage.getItem("otpBan"));
    if (banData && banData.email === email) {
      const currentTime = new Date().getTime();
      if (currentTime < banData.banEndTime) {
        setBanEndTime(banData.banEndTime);
        startBanCountdown(banData.banEndTime);
      } else {
        localStorage.removeItem("otpBan");
      }
    }
  }, [email]);

  const startBanCountdown = (endTime) => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = endTime - currentTime;

      if (remainingTime <= 0) {
        clearInterval(interval);
        setBanCountdown("");
        setBanEndTime(null);
        localStorage.removeItem("otpBan");
      } else {
        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);
        setBanCountdown(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
  };

  const handleOtpSubmission = async (e) => {
    e.preventDefault();
    setSignUpSpinner(true);

    try {
      const fd = new FormData();
      fd.append("OTP", otpInput);
      const url = `${baseUrl}/student/register/verifyOtp?email=${email}`;
      const response = await axios.post(url, fd);

      if (response.data.Error === false) {
        Notify({
          title: "success",
          message: "OTP verified successfully",
          type: "success",
        });
        navigate("/Login");
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

  const handleSendOTP = async (email) => {
    if (banEndTime) {
      Notify({
        title: "Error",
        message: `You are banned from requesting OTP for ${banCountdown}`,
        type: "danger",
      });
      return;
    }

    if (resendCount >= 2) {
      const banDuration = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
      const banEnd = new Date().getTime() + banDuration;

      setBanEndTime(banEnd);
      localStorage.setItem(
        "otpBan",
        JSON.stringify({ email, banEndTime: banEnd })
      );
      startBanCountdown(banEnd);

      Notify({
        title: "Error",
        message: "You have reached the maximum resend attempts. Please wait 3 hours before trying again.",
        type: "danger",
      });
      return;
    }

    setSignUpSpinner(true);

    try {
      const url = `${baseUrl}/student/register/sendOtp?email=${email}`;
      const OTPResponse = await axios.get(url);

      if (OTPResponse.data.Error === false) {
        Notify({
          title: "success",
          message: "OTP sent successfully",
          type: "success",
        });
        setResendCount((prev) => prev + 1);
      } else {
        Notify({
          title: "Error",
          message: OTPResponse.data.Error || "An unexpected error occurred",
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
    <div>
      <NavBar />
      <form onSubmit={handleOtpSubmission}>
        <div className={OtpStyles.ramp}>
          <div className={OtpStyles.mobile_logo}>{/* <FaMobileRetro /> */}</div>

          <div className={OtpStyles.designA}>
            <div className={OtpStyles.container_div}>
              <div className={OtpStyles.enter_otp}>
                Enter the OTP sent to your email address
              </div>

              <div className={OtpStyles.otp_input}>
                <input
                  maxLength="4"
                  placeholder="Enter OTP"
                  value={otpInput}
                  name="otpInput"
                  onChange={(e) => setOtpInput(e.target.value)}
                  type="text"
                />
              </div>

              <div className={OtpStyles.not_receive_otp}>
                Don't receive an OTP ?
              </div>

              {banCountdown ? (
                <div className={OtpStyles.ban_message}>
                  Please wait {banCountdown} before requesting another OTP.
                </div>
              ) : (
                <div
                  onClick={() => {
                    handleSendOTP(email);
                  }}
                  className={OtpStyles.resend}
                >
                  Resend
                </div>
              )}

              <div className={OtpStyles.otp_submit_btn_div}>
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      {signUpSpinner && (
        <section className={OtpStyles.spinner}>
          <div>Loading.....</div>
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

export default Otp;













