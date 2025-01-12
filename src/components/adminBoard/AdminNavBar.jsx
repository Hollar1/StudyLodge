import React from "react";
import AdminHomeStyles from "../style_Modules/AdminHome.module.css";
import { useState } from "react";
import {
  FaBars,
  FaHouseChimney,
  FaSquareXmark,
  FaXmark,
  FaUserTie,
  FaComment,
  FaEnvelope,
  FaGear,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function AdminNavBar() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openHostel, setOpenHostel] = useState(false);

  const navigate = useNavigate();
  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleOpenHostel = () => {
    setOpenHostel(!openHostel);
  };

  return (
    <div>
      <nav className={AdminHomeStyles.top_nav}>
        <div
          onClick={() => {
            handleOpenSideBar();
          }}
          className={AdminHomeStyles.faBars}
        >
          {openSideBar ? (
            <div className={AdminHomeStyles.close_sideBar}>
              <FaSquareXmark />{" "}
            </div>
          ) : (
            <FaBars />
          )}
        </div>

        {openHostel ? (
          <div
            onClick={() => {
              setOpenHostel(false);
            }}
            className={AdminHomeStyles.close_sideBarA}
          >
            <FaSquareXmark />{" "}
          </div>
        ) : (
          <div
            onClick={() => {
              handleOpenHostel();
            }}
          >
            Hostels
          </div>
        )}

        <div
          onClick={() => {
            navigate("/Inspection");
          }}
        >
          Inspection(3)
        </div>
        <div
          onClick={() => {
            navigate("/AdminHome");
          }}
        >
          Registered'Members(70)
        </div>

        <div
          onClick={() => {
            navigate("/AdminHome");
          }}
        >
          Home
        </div>
      </nav>
      {openSideBar && (
        <nav className={AdminHomeStyles.sideBar}>
          <div
            onClick={() => {
              navigate("/CreateHostel");
            }}
            className={AdminHomeStyles.add_icon}
          >
            <div className={AdminHomeStyles.house_icon}>
              {" "}
              <FaHouseChimney />
            </div>
            <p>Create Hostel</p>
          </div>

          <div className={AdminHomeStyles.add_icon}>
            <div className={AdminHomeStyles.house_icon}>
              {" "}
              <FaUserTie />
            </div>
            <p>Admin</p>
          </div>

          <div className={AdminHomeStyles.add_icon}>
            <div className={AdminHomeStyles.house_icon}>
              {" "}
              <FaEnvelope />
            </div>
            <p>Send mail</p>
          </div>

          <div className={AdminHomeStyles.add_icon}>
            <div className={AdminHomeStyles.house_icon}>
              {" "}
              <FaComment />
            </div>
            <p>Send SMS</p>
          </div>

          <div className={AdminHomeStyles.add_icon}>
            <div className={AdminHomeStyles.house_icon}>
              {" "}
              <FaGear />
            </div>
            <p>Settings</p>
          </div>

          {/* <div className={AdminHomeStyles.add_icon}>
            <div className={AdminHomeStyles.house_icon}>
              {" "}
              <FaComment />
            </div>
            <p>Job Vacancies</p>
          </div>


          <div className={AdminHomeStyles.add_icon}>
            <div className={AdminHomeStyles.house_icon}>
              {" "}
              <FaComment />
            </div>
            <p>Staffs</p>
          </div> */}
        </nav>
      )}

      {openHostel && (
        <div className={AdminHomeStyles.hostels_div_ramp}>
          <div>Scholar's Hostel</div>
          <div>Seyyidat Hostel</div>
          <div>Unique Hostel</div>
        </div>
      )}
    </div>
  );
}

export default AdminNavBar;
