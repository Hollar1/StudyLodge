import React, { useState } from "react";
import PaymentStyles from "./style_Modules/Payment.module.css";
import new_logo_001 from "../assets/images/new_logo_001.png"
import new_logo_002 from "../assets/images/new_logo_002.png"
import new_logo_003 from "../assets/images/new_logo_003.png"
import { FaThumbsUp } from "react-icons/fa6";
import NavBar from "./NavBar";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function Payment() {
  const [expiryDate, setExpiryDate] = useState(null);

  const [paymentModal, setPaymentModal] = useState(false);

  const navigate = useNavigate()

  return (
    <div className={PaymentStyles.parent_ramp}>
      {/* <NavBar /> */}
      <section onClick={()=>{navigate("/")}} className={PaymentStyles.logo_section}>
        <img src={new_logo_001} alt="" />
      </section>




<form>


<section className={PaymentStyles.payment_section}>
        <div className={PaymentStyles.summary_ramp}>
          {" "}
          <h3>Payment Summary</h3>
          <div>Purpose : <span>{"agent fee"}</span></div>
          <div>Property : <span>{"Scholar's Hostel"}</span></div>
          <div>Apartment : <span> {"room 10"}</span></div>
        </div>

        <fieldset>
          <legend>Cardholder's Name</legend>
          <input type="text" />
        </fieldset>
        <fieldset>
          <legend>Card Number</legend>
          <input type="number" />
        </fieldset>

        <div className={PaymentStyles.exp_date_cvv}>
          <fieldset className={PaymentStyles.exp_date}>
            <DatePicker
              selected={expiryDate}
              onChange={(date) => setExpiryDate(date)}
              dateFormat="MM/YYYY"
              showMonthYearPicker
              showFullMonthYearPicker
              placeholderText="mm/yyyy"
            />

            <legend>Exp Date</legend>
          </fieldset>

          <fieldset className={PaymentStyles.cvv}>
            <legend>CVV</legend>
            <input className={PaymentStyles.cvv} type="number" />
          </fieldset>
        </div>
      </section>

      <section className={PaymentStyles.agreed_section}>
        <input type="radio" />
        <p>
          By providing your card information, You agreed to pay the some of{" "}
          <span> {"₦540,000.00"} </span>to StudyLodge Ltd.
        </p>
      </section>

      <section className={PaymentStyles.payment_btn_section}>
        <button>Pay</button>
      </section>



</form>
    














      {paymentModal && (
        <section className={PaymentStyles.payment_modal}>
          <div>
            <h3>Payment Successfully! </h3>
          </div>
          <div className={PaymentStyles.modal_text}>
            We will contact you for the next steps within 48 hours.
          </div>
        </section>
      )}
    </div>
  );
}

export default Payment;
