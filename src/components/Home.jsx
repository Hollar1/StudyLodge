import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import HomeStyles from "../components/style_Modules/Home.module.css";
import Footer from './Footer'


function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />

      <div className={HomeStyles.btn}>
        <button
          onClick={() => {
            navigate("/Login");
          }}
        >
          Login
        </button>
      </div>

<button onClick={()=>{navigate("/Payment")}}>payment</button>
<button onClick={()=>{navigate("/profile")}}>Profile</button>
<button onClick={()=>{navigate("/Otp")}}>OTP SCREEN</button>
<Footer/>
    </div>
  );
}

export default Home;
