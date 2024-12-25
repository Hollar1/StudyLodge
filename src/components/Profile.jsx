import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from './Footer'
import ProfileStyles from "../components/style_Modules/Profile.module.css";
import Male_user from "../assets/images/Man_user.png";
import new_logo_003 from "../assets/images/new_logo_003.png";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import { FaSquareXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate =useNavigate()
  const [paidRent, setPaid] = useState(false);
  return (
    <div>
      <NavBar />

 <fieldset className={ProfileStyles.user_details_ramp}>
        <legend>
          <div className={ProfileStyles.user_icon}>
            <legend>
              {" "}
              <img src={Male_user} alt="" />
            </legend>
          </div>
        </legend>

        <div className={ProfileStyles.user_ramp}>
          <div>Name :</div>
          <span>kkkkk</span>
        </div>

        <div className={ProfileStyles.user_ramp}>
          <div>Gender :</div>
          <span>kkkkk</span>
        </div>

        <div className={ProfileStyles.user_ramp}>
          <div>Email :</div>
          <span>kkkkk</span>
        </div>

        <div className={ProfileStyles.user_ramp}>
          <div>Phone :</div>
          <span>kkkkkhfhfhfhfh</span>
        </div>

        <div className={ProfileStyles.edit_acc}>
          <div>
            <FaPenToSquare />
          </div>
          <span>Edit Account</span>
        </div>

        <div className={ProfileStyles.delete_acc}>
          <div>
            <FaTrashCan />
          </div>
          <span>Delete Account</span>
        </div>
      </fieldset>

      <div className={ProfileStyles.payment_ramp}>
        <fieldset>
          <legend>
            <h3>Payments</h3>
          </legend>
          <table>
            <tbody>
              <tr>
                <td>agent fee</td>
                <td>
                  ₦15,000.00 <span className={ProfileStyles.price}>✅</span>
                </td>
                <td className={ProfileStyles.pay_status}>paid </td>
              </tr>
              <tr>
                <td>commission</td>
                <td>
                  00.0 <span className={ProfileStyles.price}>---</span>
                </td>
                <td className={ProfileStyles.pay_status}>N/A</td>
              </tr>
              <tr>
                <td>caution fee</td>
                <td>
                  00.0 <span className={ProfileStyles.price}>---</span>
                </td>
                <td className={ProfileStyles.pay_status}>N/A</td>
              </tr>

              <tr>
                <td>rent fee</td>
                <td className={ProfileStyles.rent_td}>
                  ₦470,000.00
                  {paidRent ? (
                    <span className={ProfileStyles.price}>✅</span>
                  ) : (
                   
                      <div className={ProfileStyles.notPay_icon}> <FaSquareXmark/></div>
                  
                  )}
                </td>
                <td>
                  {" "}
                  {paidRent ? (
                    <div className={ProfileStyles.pay_status}>Paid</div>
                  ) : (
                    <div onClick={()=>{navigate("/payment")}} className={ProfileStyles.payment_status}>
                      pay
                    </div>
                  )}{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </fieldset>
      </div>












<div className={ProfileStyles.rent_history_ramp}>

<fieldset>
  <h3>Rent Details</h3>
  <div>Hostel's Name : <span>Scholar Hostel</span></div>
  <div>Apartment : <span>Room 7</span></div>
  <div>Rent Length: <span>1 Year</span></div>
  <div>Rent Start Date : <span>10th June 2024</span></div>
  <div>Rent Due Date : <span>10th June 2025</span></div>
  <div>Countdown : <span>257 Days Left</span></div>
  <button>Renew Your Rent</button>
</fieldset>

</div>












<Footer/>




    </div>
  );
}

export default Profile;
