import React, { useState } from "react";
import AdminHomeStyles from "../style_Modules/AdminHome.module.css";
import AdminNavBar from "./AdminNavBar";
import {
  FaBars,
  FaHouseChimney,
  FaSquareXmark,
  FaXmark,
  FaUserTie,
  FaComment,
  FaEnvelope,
} from "react-icons/fa6";
import New_Logo1 from "../../assets/images/new_logo_001.png";
import New_Logo2 from "../../assets/images/new_logo_002.png";
import New_Logo3 from "../../assets/images/new_logo_003.png";

function Admin_Home() {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [search, setSearch] = useState("");
  const handleOpenSideBar = () => {
    setOpenSideBar(!openSideBar);
  };
  return (
    <div>
    <AdminNavBar/>
      <div className={AdminHomeStyles.header_search}>
        <h1>Tenants</h1>

        <div className={AdminHomeStyles.search_div}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          {search ? (
            <div
              onClick={() => {
                setSearch("");
              }}
            >
              <FaXmark />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <section className={AdminHomeStyles.tenant_table_section}>
        {search}

        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Hostel's Name</th>
              <th>Room Num</th>
              <th>Gender</th>
              <th>Days Left</th>
              <th>Profile</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Folake Kolawole</td>
              <td>Seyyidat Hostel</td>
              <td>Room 12</td>
              <td>Female</td>
              <td>59 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Ojo Jagunlabi</td>
              <td>Scholar's Hostel</td>
              <td>Room 09</td>
              <td>Male</td>
              <td>259 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Israel Ruth</td>
              <td>Uniques Hostel</td>
              <td>Room 19</td>
              <td>Female</td>
              <td>150 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Lateef Umar</td>
              <td>Seyyidat Hostel</td>
              <td>Room 07</td>
              <td>Male</td>
              <td>122 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Muhammed Yusuf</td>
              <td>Unique Hostel</td>
              <td>Room 11</td>
              <td>Male</td>
              <td>345 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Titilayo Owolabi</td>
              <td>Seyyidat Hostel</td>
              <td>Room 05</td>
              <td>Female</td>
              <td>80 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Suliayt Kareem</td>
              <td>Scholar's Hostel</td>
              <td>Room 22</td>
              <td>Male</td>
              <td>37 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Mariam Olubunmi</td>
              <td>Seyyidat Hostel</td>
              <td>Room 03</td>
              <td>Male</td>
              <td>29 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
            <tr>
              <td>Olamide Tijani</td>
              <td>Scholar's Hostel</td>
              <td>Room 08</td>
              <td>Male</td>
              <td>15 days</td>
              <td className={AdminHomeStyles.profile_btn_div}>
                <button className={AdminHomeStyles.profile_btn}>Profile</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Admin_Home;
