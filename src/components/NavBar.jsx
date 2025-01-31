import React, { useState } from "react";
import NavBarStyles from "../components/style_Modules/NavBar.module.css";
import new_logo_001 from "../assets/images/new_logo_001.png";
import new_logo_002 from "../assets/images/new_logo_002.png";
import new_logo_003 from "../assets/images/new_logo_003.png";

import { FaUser } from "react-icons/fa6";
import { FaBars, FaSquareXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [hideBars, setHideBars] = useState(false);
  const handleHideBars = () => {
    setHideBars(!hideBars);
  };
  return (
    <div>
      <nav className={NavBarStyles.boss_nav}>
        <div className={NavBarStyles.logo_div}>
          <img
            onClick={() => {
              navigate("/");
            }}
            src={new_logo_001}
            alt=""
          />
        </div>
        <div className={NavBarStyles.user_bars}>
          {" "}
          <div
            onClick={() => {
              navigate("/Login");
            }}
            className={NavBarStyles.user_div}
          >
            <FaUser />
          </div>
          <div
            onClick={() => {
              handleHideBars();
            }}
            className={NavBarStyles.faBars_div}
          >
            {hideBars ? (
              <div className={NavBarStyles.close_bars}>
                <FaSquareXmark />{" "}
              </div>
            ) : (
              <div>
                <FaBars />
              </div>
            )}
          </div>
        </div>
      </nav>

      {hideBars && (
        <div className={NavBarStyles.bars_links}>
          <div
            onClick={() => {
              navigate("/Hostel");
            }}
          >
            Trinity Zone (Kwara Poly)
          </div>
          <div>Scholar's Palace (Kwara poly)</div>
          <div>The Comfort (offa poly)</div>
          <div>Sun Shine (A.A.U. Akungba)</div>
          <div>Guru Home (K.S.U. Molete)</div>
          <div onClick={()=>{navigate("/AdminHome")}}>ADMIN DASHBOARD</div>
          <div onClick={()=>{navigate("/Profile")}}>USER PROFILE</div>
          <div onClick={()=>{navigate("/AdminLogin")}}>ADMIN LOGIN PAGE</div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
