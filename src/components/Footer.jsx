import React from 'react'

import FooterStyles from "./style_Modules/Footer.module.css"
import Facebook_logo from "../assets/images/Facebook_logo.png"
import Twitter_logo   from "../assets/images/Twitter_logo.png"
import Instagram_logo from "../assets/images/Instagram_logo.webp"
// import Youtube_logo from "../assets/images/Youtube_logo.png"
import Youtube_logo from "../assets/images/Youtube_play_btn.png"
import new_logo_002 from "../assets/images/new_logo_002.png"
import { useNavigate } from 'react-router-dom'


function Footer() {
  const navigate = useNavigate()
  return (
    <div className={FooterStyles.parent_ramp} >
        <div className={FooterStyles.ramp}>
            <div ><img src={new_logo_002} alt="" /></div>
            
        </div>










 <div className={FooterStyles.footer_details}>

<div>
  <div onClick={()=>{navigate("/")}}>Home</div>
<div onClick={()=>{navigate("/About")}}>About Us</div>
<div>My Account</div>
<div>Job Vacancies</div>
</div>



<div>
<div>Terms & Condition</div>
<div onClick={()=>{navigate("/Privacy_policy")}}>Privacy & Policy</div>
<div onClick={()=>{navigate("/Help_support")}}>Help & Support</div>
<div onClick={()=>{navigate("/Team_member")}}>Team Members</div>
</div>

</div>









<div className={FooterStyles.medias}>




  <div className={ FooterStyles.facebook}>  <img src={Facebook_logo} alt="" /></div>


<div className={FooterStyles.instagram}>    <img  src={Instagram_logo} alt="" /></div>

 <div className={FooterStyles.twitter}>   <img  src={Twitter_logo} alt="" /></div>
   


<div className={FooterStyles.youtube}>
  <img src={Youtube_logo} alt="" />
</div>


</div>











    </div>
  )
}

export default Footer