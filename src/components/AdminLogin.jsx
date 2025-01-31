import React from 'react'
import { useState } from 'react';
import LoginStyles from "./style_Modules/Login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Vortex } from "react-loader-spinner";


function AdminLogin() {
    const [signUpModal, setSignUpModal] = useState(false);
    const [signUpSpinner, setSignUpSpinner] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

     const [logInState, setLogInSate] = useState({
        email: "",
        password: "",
      });


      const handleOnchange = (e) => {
        const { name, value } = e.target;
        setLogInSate({ ...logInState, [name]: value });
      };
    



  return (
    <div>    <section className={LoginStyles.Login_form_section}>
        <h3>LOGIN AS ONE OF OUR STAFF</h3>
            <form >
              <fieldset>
                <legend>Email</legend>
                <input
                // autoComplete="off"
                disabled ={signUpSpinner}
               
                />
              </fieldset>





              <fieldset>
                <legend>Employee Num</legend>
                <input
                // autoComplete="off"
                disabled ={signUpSpinner}
                
                />
              </fieldset>







    
              <fieldset>
                <legend>Password</legend>
                <input
                disabled={signUpSpinner}
                
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
    
         
    
    
            
          </section>
    </div>
  )
}

export default AdminLogin