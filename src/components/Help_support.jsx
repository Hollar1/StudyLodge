import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Help_supportStyles from "../components/style_Modules/Help_support.module.css";

function Help_support() {
  return (
    <div className={Help_supportStyles.parent_ramp}>
      <NavBar />
fff
      <div className={Help_supportStyles.header}>
        <h3>Help & Support</h3>
      </div>

      <p className={Help_supportStyles.p}>
        Welcome to our Help & Support page! We’re here to assist you with any
        questions or issues you may have. Browse the sections below for answers
        to common queries or contact us for personalized support.
      </p>

      <div className={Help_supportStyles.ramp}>
        <div>
          <ul>
            <h4>Getting Started</h4>
            <li>
              Creating an Account: Learn how to register, manage, and secure
              your account.
            </li>
            <li>
              Finding Accommodation: Tips on searching, filtering, and booking
              the perfect stay.
            </li>
            <li>
              How to Book: Step-by-step instructions on making a reservation.
            </li>
          </ul>

          <ul>
            <h4>Managing Your Booking</h4>
            <li>Payment Issues: Troubleshooting payment problems.</li>
            <li>
              Changing or Canceling a Booking: Policies, fees, and how-to guides
            </li>
            <li>
              Viewing Bookings: How to check your current and past reservations
            </li>
          </ul>

          <ul>
            <h4>Host Support</h4>
            <li>
              Becoming a Host: How to list your property and attract guests.
            </li>
            <li>
              Managing Listings: Updating details, availability, and pricing.
            </li>
            <li>
              Clients Communication: Best practices for responding to inquiries
            </li>
          </ul>

          <ul>
            <h4>Payments & Refunds</h4>
            <li>Payment Methods: Supported payment options and currencies.</li>
            <li>Refund Policy: How refunds work and when to expect them.</li>
            <li>
              Deposit Information: Security deposits and how they are managed.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Help_support;
