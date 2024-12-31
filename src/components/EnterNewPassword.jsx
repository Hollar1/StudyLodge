import React, { useState } from "react";
import NavBar from "./NavBar";
import ForgotPasswordStyles from "../components/style_Modules/Forgot_password.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "./Config";
import { Vortex } from "react-loader-spinner";
import axios from "axios";
import Notify from "./Notify";
import LoginStyles from "./style_Modules/Login.module.css";

function EnterNewPassword() {
  const [signUpSpinner, setSignUpSpinner] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  console.log(newPassword);
  const location = useLocation();
  const navigate = useNavigate();

  const id = location.state?.user;
  console.log(id)

  const handleNewPassword = async (e) => {
    e.preventDefault();
    // Show the loading spinner
    setSignUpSpinner(true);
    try {
      // Prepare the form data
      const fd = new FormData();
      fd.append("Password", newPassword);
      // Define the API URL
      const url = `${baseUrl}/student/forgotPassword/reset?id=${id}`;
      // Send the request
      const response = await axios.post(url, fd);
      // Check response and notify user
      if (response.data.Error === false) {
        Notify({
          title: "success",
          message: "Password reset successfully",
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

  return (
    <div>
      <div className={ForgotPasswordStyles.parent_ramp}>
        <NavBar />
        <div className={ForgotPasswordStyles.forgotPassword_ramp}>
          <h3>New Password</h3>
          <p>Create New Password</p>

          <form onSubmit={handleNewPassword}>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              type="text"
            />

            <div>
              <button type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>

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

export default EnterNewPassword;
