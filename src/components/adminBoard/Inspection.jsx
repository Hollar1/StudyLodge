import React, { useState } from "react";
import InspectionStyles from "../style_Modules/Inspection.module.css";
import { FaCircle, FaXmark } from "react-icons/fa6";

function Inspection() {
  const [showWarning, setShowWarning] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [paidRent, setPayRent] = useState(true);
  const [search, setSearch] = useState("");
  const [paymentConfirm,setPaymentConfirm]=useState(false)

  const handleRadioClick = (event) => {
    event.preventDefault();
    setShowWarning(true);
  };

  const proceedPayment = () => {
    setShowWarning(false);
    setIsConfirmed(true);
    setPaymentConfirm(true)
    setTimeout(()=>{
      setPaymentConfirm(false)
    },2500)
   
  };

  const cancelPayment = () => {
    setShowWarning(false);
    setIsConfirmed(false);
  };



  return (
    <div className={InspectionStyles.parent_ramp}>
      <div className={InspectionStyles.header_search}>
        {" "}
        <h4>Inspection History</h4>{" "}
       <div className={InspectionStyles.search_div}>
         <input
         placeholder="Enter client's name"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
     {search?<FaXmark className={InspectionStyles.close_icon} onClick={()=>{setSearch("")}}/>:""}
        </div>
      
      </div>

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
              <td className={InspectionStyles.rent_price_td}>
                {" "}
                ₦470,000.00{" "}
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
          <div> Are you sure you want to confirm this payment ?</div>

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




{paymentConfirm&&<div className={InspectionStyles.paymentConfirm_modal}>
Payment Confirmed <div className={InspectionStyles.thumb}>👍🏾</div>
</div>}


    </div>
  );
}

export default Inspection;
