import React, { useState } from "react";
import InspectionStyles from "../style_Modules/Inspection.module.css";
import { FaCircle } from "react-icons/fa6";

function Inspection() {
  const [showWarning, setShowWarning] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [paidRent, setPayRent] = useState(false);

  const handleRadioClick = (event) => {
    event.preventDefault();
    setShowWarning(true);
  };

  const proceedPayment = () => {
    setShowWarning(false);
    setIsConfirmed(true);
    alert("Payment Confirmed!");
    // Add form submission or other actions here
  };

  const cancelPayment = () => {
    setShowWarning(false);
    setIsConfirmed(false);
  };

  const handleConfirmAgentFeePayment = () => {
    setConfirmAgentFeeModal(true);
  };

  return (
    <div className={InspectionStyles.parent_ramp}>
      <h2>Inspection History</h2>
      <section className={InspectionStyles.tenant_table_section}>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Hostel's Name</th>
              <th>Room Num</th>
              <th>Ins. Date</th>
              <th>Agent Fee</th>
              <th>Rent Fee</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Folake Kolawoleoooo</td>
              <td>Seyyidat Hostel</td>
              <td>Room 12</td>
              <td>12 Jan 2023</td>
              <td>
                {" "}
                ₦10,000{" "}
                <input
                  className={InspectionStyles.radio}
                  type="radio"
                  name="confirmPayment"
                  checked={isConfirmed}
                  onChange={handleRadioClick}
                />
              </td>
              <td>
                {" "}
                ₦470,000{" "}
                {paidRent ? (
                  <span className={InspectionStyles.paid_Rent}>Paid</span>
                ) : (
                  <span className={InspectionStyles.rent_waiting}>waiting</span>
                )}
              </td>
              <td className={InspectionStyles.profile_btn_div}>
                <button className={InspectionStyles.profile_btn}>
                  Profile
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {showWarning && (
        <div className={InspectionStyles.warning}>
          <div> Are you sure you want to confirm the payment ?</div>

          <div className={InspectionStyles.yes_no_div}>
            <button
              className={InspectionStyles.yes_btn}
              onClick={proceedPayment}
            >
              Yes
            </button>
            <button className={InspectionStyles.no_btn} onClick={cancelPayment}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Inspection;
