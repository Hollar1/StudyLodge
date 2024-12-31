



import React, { useState } from "react";
import SignUpStyles from "../components/style_Modules/SignUp.module.css";
import new_logo_001 from "../assets/images/new_logo_001.png";
import new_logo_002 from "../assets/images/new_logo_002.png";
import new_logo_003 from "../assets/images/new_logo_003.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Vortex } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Swal from "sweetalert2";
import axios from "axios";
import Notify from "./Notify";
import { baseUrl } from "./Config";

function SignUp() {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signUpSpinner, setSignUpSpinner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [mail, setMail] = useState("")

  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Show the loading spinner
    setSignUpSpinner(true);

    try {
      // Prepare the form data
      const fd = new FormData();
      fd.append("FirstName", signUpDetails.firstName);
      fd.append("LastName", signUpDetails.lastName);
      fd.append("Gender", signUpDetails.gender);
      fd.append("Email", signUpDetails.email);
      fd.append("Phone", signUpDetails.phoneNumber);
      fd.append("Password", signUpDetails.password);

      // Define the API URL
      const url = `${baseUrl}/student/register`;

    // Send the request  
      const response = await axios.post(url, fd);

      // Check response and notify user
      if (response.data.Error === false) {
        setMail(response.data.Email);
        console.log(mail)

        await handleSendOTP(response.data.Email);
      } else {
        Notify({
          title: "Error",
          message: response.data.Error || "An unexpected error occurred",
          type: "danger",
        });
      }
    } catch (error) {
      // Handle errors
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

  const HandlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const handleSendOTP = async (email) => {
   
    console.log(email)
    try {
      const url = `${baseUrl}/student/register/sendOtp?email=${email}`;
      const OTPResponse = await axios.get(url);
      if (OTPResponse.data.Error === false) {
        Notify({
          title: "success",
          message: "OTP sent successfully",
          type: "success",
        });
        navigate("/Otp", { state:{email} });
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

  return (
    <div className={SignUpStyles.parent_ramp}>
      <NavBar />
      {/* <section className={SignUpStyles.logo_section}>
        <img src={Logo_002} alt="" />
      </section> */}
      <section className={SignUpStyles.SignUp_form_section}>
        <form onSubmit={handleSignUp}>
          <div className={SignUpStyles.signUp_header}>
            {" "}
            <h3>Sign Up</h3>
          </div>
          <fieldset>
            <legend>First Name</legend>
            <input className={SignUpStyles.to_upper}
              value={signUpDetails.firstName}
              name="firstName"
              onChange={handleOnchange}
              type="text"
            />
          </fieldset>
          <fieldset>
            <legend>Last Name</legend>
            <input className={SignUpStyles.to_upper}
              value={signUpDetails.lastName}
              name="lastName"
              onChange={handleOnchange}
              type="text"
            />
          </fieldset>
          <fieldset>
            <legend>Gender</legend>
            <input className={SignUpStyles.to_upper}
              value={signUpDetails.gender}
              name="gender"
              onChange={handleOnchange}
              type="text"
            />
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input className={SignUpStyles.to_lower}
              value={signUpDetails.email}
              name="email"
              onChange={handleOnchange}
              type="email"
            />
          </fieldset>
          <fieldset>
            <legend>Phone</legend>
            <input className={SignUpStyles.to_lower}
              value={signUpDetails.phoneNumber}
              name="phoneNumber"
              onChange={handleOnchange}
              type="number"
            />
          </fieldset>

          <fieldset>
            <legend>Password</legend>
            <input className={SignUpStyles.to_lower}
              value={signUpDetails.password}
              name="password"
              onChange={handleOnchange}
              type={showPassword ? "text" : "password"}
            />
            <div
              onClick={() => {
                HandlePasswordShow();
              }}
              className={SignUpStyles.eye_icons}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </fieldset>

          <div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </section>

      <section className={SignUpStyles.already_have_acc_ramp}>
        <div>
          Already have an account?
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            Login
          </span>
        </div>
      </section>

      {signUpModal && (
        <section className={SignUpStyles.signUp_modal}>
          <div>
            <h3>Account Created Successfully</h3>
          </div>
          <div className={SignUpStyles.modal_text}>
            check your registered email to activate your account.
          </div>
        </section>
      )}

      {signUpSpinner && (
        <section className={SignUpStyles.spinner}>
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

export default SignUp;





