import React, { useState } from "react";
import NavBar from "./NavBar";
import OtpStyles from "../components/style_Modules/Otp.module.css";
import { FaMobileRetro } from "react-icons/fa6";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "./Config";
import axios from "axios";
import Notify from "./Notify";
import { Vortex } from "react-loader-spinner";

function ForgotPassword_OTP() {

    const navigate = useNavigate();
    const location = useLocation()
    
  const [signUpSpinner, setSignUpSpinner] = useState(false);
  
  const [otpInput, setOtpInput] = useState();
  console.log(otpInput);

  const email = location.state?.forgotPassword;
  console.log(email)
  const handleOtpSubmission = async (e) => {
    e.preventDefault();
    // Show the loading spinner
    setSignUpSpinner(true);

    try {
      const fd = new FormData();
      fd.append("OTP", otpInput);
      // Define the API URL
      const url = `${baseUrl}/student/forgotPassword/verifyOtp?email=${email}`;
  
      // Send the request
      const response = await axios.post(url, fd);
      const user = response.data.User
      // Check response and notify user
      if ((response.data.Error === false)) {
        Notify({
          title: "success",
          message: "OTP verified successfully",
          type: "success",
        });
        navigate("/EnterNewPassword",{state:{user}});
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
      // Hide the spinner
      setSignUpSpinner(false);
    }
  };

  return (
    <div>
      <NavBar/>
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
              <div className={OtpStyles.resend}>Resend</div>
              <div className={OtpStyles.otp_submit_btn_div}>
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>








      {signUpSpinner && (
        <section className={OtpStyles.spinner}>
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
  )
}

export default ForgotPassword_OTP