import React from "react";
import new_logo_001 from "../assets/images/new_logo_001.png"
import new_logo_002 from "../assets/images/new_logo_002.png"
import new_logo_003 from "../assets/images/new_logo_003.png"
import LoginStyles from "./style_Modules/Login.module.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Vortex } from "react-loader-spinner";
import { useState } from "react";
import NavBar from "./NavBar";

function Login() {









  const [showPassword, setShowPassword] = useState(false);

  const HandlePasswordShow = () => {
    setShowPassword(!showPassword);
  };

  const [signUpModal, setSignUpModal] = useState(false);
  const [signUpSpinner, setSignUpSpinner] = useState(false);









  const navigate = useNavigate();
  return (
    <div className={LoginStyles.parent_ramp}>
      <NavBar/>
      {/* <section className={LoginStyles.logo_section}>
        <section className={LoginStyles.logo_section}>
          <img src={new_logo_001} alt="" />
        </section>
      </section> */}




<div className={LoginStyles.login_header}> <h3>Login</h3></div>





      <section className={LoginStyles.Login_form_section}>
        <form>
          <fieldset>
            <legend>Email</legend>
            <input type="email" />
          </fieldset>





           <fieldset>
            <legend>Password</legend>
            <input type={showPassword ? "text" : "password"} />
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
              <input type="radio" />
              Remember Me
            </div>
            <div>Forgot Password ?</div>
          </div>

          <div>
            <button type="submit">Login</button>
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
       Looking for perfect place to stay during your study ? You're in the right place.
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
