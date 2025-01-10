import React from "react";
import new_logo_001 from "../assets/images/new_logo_001.png";
import new_logo_002 from "../assets/images/new_logo_002.png";
import new_logo_003 from "../assets/images/new_logo_003.png";
import LoginStyles from "./style_Modules/Login.module.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Vortex } from "react-loader-spinner";
import { useState } from "react";
import NavBar from "./NavBar";
import { baseUrl } from "./Config";
import axios from "axios";
import Notify from "./Notify";
import { el } from "date-fns/locale";

function Login() {
  const navigate = useNavigate();
  const [longInState, setLogInSate] = useState({
    email: "",
    password: "",
  });

  const [signUpModal, setSignUpModal] = useState(false);
  const [signUpSpinner, setSignUpSpinner] = useState(false);

 

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setLogInSate({ ...longInState, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Show the loading spinner
    setSignUpSpinner(true);

    try {
      const fd = new FormData();
      fd.append("Email", longInState.email);
      fd.append("Password", longInState.password);
      // Define the API URL
      const url = `${baseUrl}/student/login`;
      // Post the request
      const response = await axios.post(url, fd);
      // Check response and notify user
      if (response.data.Error === false) {
        if (response.data.Data !== undefined) {

setSignUpModal(true)
setTimeout(() => {
  setSignUpModal(false)
  localStorage.setItem("userData", JSON.stringify(response.data.Data));
  navigate("/");
},5000);

          // Notify({
          //   title: "success",
          //   message: "Login successfully",
          //   type: "success",
          // });
          // localStorage.setItem("userData", JSON.stringify(response.data.Data));
          // navigate("/");


        } else {
          await handleSendOTP(longInState.email);
        }
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

  const handleSendOTP = async (email) => {
    try {
      const url = `${baseUrl}/student/register/sendOtp?email=${email}`;
      const OTPResponse = await axios.get(url);
      if (OTPResponse.data.Error === false) {
        Notify({
          title: "success",
          message: "OTP sent successfully",
          type: "success",
        });
        navigate("/Otp", { state: { email } });
      } else {
        Notify({
          title: "Error",
          message: response.data.Error || "An unexpected error occurred",
          type: "danger",
        });
        navigate("/Login");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.Error || error.message || "An error occurred";
      Notify({
        title: "Error",
        message: errorMessage,
        type: "danger",
      });
      navigate("/Login");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const HandlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

 

  return (
    <div className={LoginStyles.parent_ramp}>
      <NavBar />
      {/* <section className={LoginStyles.logo_section}>
        <section className={LoginStyles.logo_section}>
          <img src={new_logo_001} alt="" />
        </section>
      </section> */}

      <div className={LoginStyles.login_header}>
        {" "}
        <h3>Login</h3>
      </div>

      <section className={LoginStyles.Login_form_section}>
        <form onSubmit={handleLogin}>
          <fieldset>
            <legend>Email</legend>
            <input
            // autoComplete="off"
            disabled ={signUpSpinner}
              value={longInState.email}
              name="email"
              onChange={handleOnchange}
              type="email"
            />
          </fieldset>

          <fieldset>
            <legend>Password</legend>
            <input
            disabled={signUpSpinner}
              value={longInState.password}
              name="password"
              onChange={handleOnchange}
              type={showPassword ? "text" : "password"}
            />
            <div
              onClick={() => {
                HandlePasswordShow();
              }}
              className={LoginStyles.eye_icons}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </fieldset>

          {/* <fieldset>
            <legend>Password</legend>
            <input type="password" />
          </fieldset>  */}

          <div className={LoginStyles.remember_me_forgot_password}>
            <div>
              <input disabled={signUpSpinner} type="radio" />
              Remember Me
            </div>
            <div onClick={()=>{navigate("/ForgotPassword")}}>Forgot Password ?</div>
          </div>

          <div>
            <button disabled={signUpSpinner} type="submit">Login</button>
          </div>
        </form>

        <section className={LoginStyles.already_have_acc_ramp}>
          <div>
            Don't have an account ?
            <span
              onClick={() => {
                navigate("/SignUp");
              }}
            >
              {" "}
              Create
            </span>
          </div>
        </section>
      </section>

      {signUpModal && (
        <section className={LoginStyles.signUp_modal}>
          <div>
            <h3>Welcome to StudyLodge!</h3>
          </div>
          <div className={LoginStyles.modal_text}>
            Looking for perfect place to stay during your study ? You're in the
            right place.
          </div>
        </section>
      )}

      {signUpSpinner && (
        <section className={LoginStyles.spinner}>
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

export default Login;
