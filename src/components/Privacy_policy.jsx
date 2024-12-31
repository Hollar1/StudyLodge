import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Privacy_policyStyles from "../components/style_Modules/Privacy_policy.module.css";

function Privacy_policy() {
  return (
    <div className={Privacy_policyStyles.parent_ramp}>
      <NavBar />
      ffff



<div className={Privacy_policyStyles.header}>
<h3>Privacy Policy</h3>
</div>







      <section>
        <div className={Privacy_policyStyles.Privacy_policy_div}>
      

          <p>
            Our company is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website{" "}
            <a href="https://www.revivalcarehome.co.uk/">https://www.revivalcarehome.co.uk/</a>, use our services,
            or interact with us. Please read this policy carefully. If you do
            not agree with the terms of this Privacy Policy, please do not
            access or use our services.
          </p>
        </div>

        <div className={Privacy_policyStyles.abc}>
          <h4>Personal Information Collected</h4>
          <p>
            We may collect personal information that you provide directly to us,
            such as:
            <ul>
              <li>Name</li>
              <li>Gender</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address</li>
              <li>Payment information (if applicable)</li>
            </ul>
          </p>
        </div>

        <div className={Privacy_policyStyles.abc}>
          <h4>How We Use Your Information</h4>
          <p>
            We use the information we collect for the following purposes:
            <ul>
              <li>To provide, operate, and maintain our services.</li>
              <li>To process transactions and send relevant communications.</li>
              <li>To improve our website and user experience.</li>
              <li>To comply with legal obligations and enforce our terms.</li>
              <li>
                To send marketing and promotional materials (with your consent).
              </li>
            </ul>
          </p>
        </div>

        <div className={Privacy_policyStyles.abc}>
          <h4>Information Sharing and Disclosure</h4>
          <p>
            We do not sell or rent your personal information. However, we may
            share your data with:
            <ul>
              <li>
                Service Providers: Third-party vendors who assist us in
                delivering our services (e.g., payment processors, analytics
                tools).
              </li>
              <li>
                Legal Authorities: When required by law or to protect our rights
                and interests
              </li>
              <li>
                Business Transfers: In the event of a merger, acquisition, or
                sale of assets.
              </li>
            </ul>
          </p>
        </div>

        <div className={Privacy_policyStyles.abc}>
          <h4> Your Rights and Choices</h4>
          <p>
            You have the following rights regarding your personal information:
            <ul>
              <li> Access: Request access to the data we hold about you.</li>
              <li>
                Correction: Request corrections to inaccurate or incomplete
                information.
              </li>
              <li>
                Deletion: Request the deletion of your data, subject to legal
                obligations.
              </li>
              <li>
                Opt-Out: Withdraw consent for marketing communications or
                certain data processing activities.
              </li>
            </ul>
          </p>
        </div>

        <div className={Privacy_policyStyles.contactUs}>
          <h4> Contact Us</h4>
          <p>
            If you have questions or concerns about this Privacy Policy, please
            contact us:
          </p>
          <div>
            Email:{" "}
            <span>
              <a href="mailto:studylodge@gmail.com">studylodge@gmail.com</a>
            </span>
          </div>
          <div>
            Phone:{" "}
            <span>
              <a href="tel:+234 7042362194">+234 7042362194</a>
            </span>
          </div>
          <div>
            Address:{" "}
            <span>
              <a href="#">
                No 1 Olorunshogo Street Ilorin, Kwara State,Nigeria
              </a>
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Privacy_policy;
