import React from "react";
import OtpStyles from "../components/style_Modules/Otp.module.css";
import { FaMobileRetro } from "react-icons/fa6";

function Otp() {
  return (
    <div>
  <form action="">


  <div className={OtpStyles.ramp}>
        <div className={OtpStyles.mobile_logo}>
          {/* <FaMobileRetro /> */}
        </div>













        <div className={OtpStyles.designA}>
          
          <div className={OtpStyles.container_div}>
            

          <div className={OtpStyles.enter_otp}>Enter the OTP sent to your email address</div>


            <div className={OtpStyles.otp_input}>
              <input type="number" />
              <input type="number" />
              <input type="number" />
              <input type="number" />
            </div>

            <div className={OtpStyles.not_receive_otp}>
              Don't receive an OTP ?
            </div>
            <div className={OtpStyles.resend}>Resend</div>
            <div className={OtpStyles.otp_submit_btn_div}>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>



  </form>
    </div>
  );
}

export default Otp;



