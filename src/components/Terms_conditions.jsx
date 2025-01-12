import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Terms_condition_styles from "../components/style_Modules/Terms_conditions.module.css";

function Terms_conditions() {
  return (
    <div className={Terms_condition_styles.ramp}>
      <NavBar />
      <div className={Terms_condition_styles.header_div}>
        <h3>Our Terms & Conditions</h3>
      </div>
      <div className={Terms_condition_styles.parent_div}>
        <h3> Introduction</h3>
        <p>
          These Terms and Conditions govern the occupancy of student
          accommodation at StudyLodge, in accordance with Nigerian law.
        </p>
        <h3>Definitions</h3>
        <p>
          "Accommodation" refers to the rooms and facilities provided by
          StudyLodge. "Tenant" refers to the student who occupies the
          accommodation. "Landlord" refers to StudyLodge or its managing entity.
        </p>
        <h3>Lease Agreement</h3>
        <p>
          The lease is a fixed-term agreement for a period of [e.g., 12 months],
          commencing on same day the occupancy moved in. The agreement may be
          renewed or extended upon mutual consent of both parties.
        </p>
        <h3> Rent and Payments</h3>
        <p>
          Rent is per year, payable in advance by the day of each month. A
          security deposit of [₦20,000.00] is required before occupancy,
          refundable upon the end of the tenancy, subject to deductions for
          damages or unpaid rent.
        </p>
        <h3>Utilities and Bills</h3>
        <p>
          Rent includes/excludes utilities such as water, electricity, and
          internet. [Specify included utilities.] Tenants are responsible for
          the payment of excluded utilities. Meters will be provided for fair
          calculation.
        </p>
        <h3> Use of Premises</h3>
        <p>
          The accommodation is for residential use only and must not be used for
          commercial activities. Subletting is strictly prohibited without prior
          written consent from the Landlord.
        </p>
        <h3> Maintenance and Repairs</h3>
        <p>
          Tenants must keep the accommodation in good condition and report any
          damages or needed repairs immediately. Routine maintenance will be
          carried out by the Landlord. Tenants may be charged for repairs caused
          by negligence or misuse. Conduct and Noise Tenants must conduct
          themselves in a manner that does not disturb other residents. Noise
          levels should be minimized, especially during nighttime hours (10 PM
          to 6 AM).
        </p>
        <h3>Visitors</h3>
        <p>
          {" "}
          Tenants may have visitors, but overnight stays are limited to [e.g., 3
          nights per month], with prior notification to the management. Visitors
          must adhere to the accommodation's rules and regulations.
        </p>
        <h3> Termination of Tenancy</h3>
        <p>
          {" "}
          The Landlord may terminate the lease for breach of terms, including
          non-payment of rent, damage to property, or misconduct. Tenants may
          terminate the lease by giving [e.g., 1 month’s] written notice.
        </p>
        <h3> Security and Safety</h3>
        <p>
          {" "}
          Tenants must ensure that doors and windows are locked when leaving the
          premises. The use of illegal substances and hazardous materials is
          prohibited.
        </p>
        <h3>Insurance</h3>
        <p>
          {" "}
          The Landlord is not responsible for the loss or damage of tenants'
          personal belongings. Tenants are advised to obtain personal property
          insurance.
        </p>
        <h3> Governing Law</h3>
        <p>
          {" "}
          This agreement shall be governed by and construed in accordance with
          the laws of Nigeria. Any disputes arising from this agreement shall be
          settled in Nigerian courts.
        </p>
        <h3> Amendments</h3>
        <p>
          {" "}
          The Landlord reserves the right to amend these terms and conditions
          with [e.g., 30 days] notice to tenants.
        </p>
        <h3>Acceptance</h3>
        <p>
          {" "}
          By signing this agreement, the tenant agrees to abide by the terms and
          conditions set forth herein.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Terms_conditions;
