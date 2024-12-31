import React from "react";
import OnlineProcessStyles from "../components//style_Modules/OnlineProcess.module.css";
import Online_image_003 from "../assets/images/Online_image_003.jpg"
import Footer from "./Footer";

function OnlineProcess() {
  return (
    <div className={OnlineProcessStyles.parent_ramp}>
      <div className={OnlineProcessStyles.top_image}>
        <img src={Online_image_003} alt="" />
        <div>
        <h3>Online Rental Process</h3>
        <p>
        Renting accommodation with StudyLodge is an entirely online process
        designed for convenience and efficiency. Here's a step-by-step guide:
      </p>
        </div>
        
      </div>

      

    

      <div className={OnlineProcessStyles.abc}>
        <ul className={OnlineProcessStyles.margin_top}>
          <h4>Online Booking for Viewings</h4>
          <li>Visit the Website: Go to StudyLodge's official website.</li>
          <li>
            Search for Properties: Browse available accommodations using filters
            like location, room type, and budget.
          </li>
          <li>
            Book a Viewing: Select a suitable property and schedule an online or
            in-person viewing if offered. Booking confirmations will be sent via
            email.
          </li>
        </ul>

        <ul>
          <h4>Application Process</h4>
          <li>
            Create an Account: Register on the platform to manage your
            application.
          </li>
          <li>
            Submit Application: Fill out the online application form, providing
            necessary details such as personal information, student status, and
            references (if required).
          </li>
          <li>
            Upload Documents: Upload required documents like ID, proof of
            enrollment, and financial information directly through the portal.
          </li>
        </ul>

        <ul>
          <h4>Offer and Acceptance</h4>
          <li>
            Receive Offer: If your application is approved, you'll receive a
            rental offer via email or the online dashboard.
          </li>
          <li>
            Accept the Offer: Review the rental terms, accept the offer, and
            digitally sign the rental agreement
          </li>
        </ul>

        <ul>
          <h4>Payments</h4>
          <li>
            Initial Payment: Pay the security deposit and first month’s rent
            securely through the online payment system
          </li>
          <li>
            Payment Methods: Use accepted payment methods like credit/debit
            cards or bank transfers.
          </li>
        </ul>

        <ul>
          <h4>Move-In Instructions</h4>
          <li>
            Confirmation Email: Once payments are confirmed, you’ll receive
            detailed move-in instructions, including check-in dates and key
            collection information.
          </li>
        </ul>

        <ul>
          <h4>Why Online Only?</h4>
          <li>Convenience: Apply from anywhere globally.</li>
          <li>
            Transparency: Clear, documented process with secure online payments.
          </li>
          <li>Efficiency: Faster application reviews and confirmations.</li>
        </ul>

        <p className={OnlineProcessStyles.p}>
          By keeping the process fully online, StudyLodge ensures a streamlined,
          user-friendly experience from start to finish.
        </p>
      </div>
      <Footer/>
    </div>
  );
}

export default OnlineProcess;
