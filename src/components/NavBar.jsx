import React, { useState } from 'react'
import NavBarStyles from "../components/style_Modules/NavBar.module.css"
import new_logo_001 from "../assets/images/new_logo_001.png"
import new_logo_002 from "../assets/images/new_logo_002.png"
import new_logo_003 from "../assets/images/new_logo_003.png"

import { FaUser } from 'react-icons/fa6'
import { FaBars,FaSquareXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  const [hideBars,setHideBars]=useState(false)
  const handleHideBars =()=>{
    setHideBars(!hideBars)
  }
  return (
    <div>

<nav>
    <div className={NavBarStyles.logo_div}><img onClick={()=>{navigate("/")}} src={new_logo_001} alt="" /></div>
   <div className={NavBarStyles.user_bars}> <div onClick={()=>{navigate("/Profile")}} className={NavBarStyles.user_div}><FaUser/></div>
   <div onClick={()=>{handleHideBars()}} className={NavBarStyles.faBars_div}>
    
    
   {hideBars?<div className={NavBarStyles.close_bars}><FaSquareXmark/> </div>         :    <div><FaBars/></div>}
    
    
    
    
    </div></div>
</nav>








{hideBars &&<div className={NavBarStyles.bars_links}>
  <div onClick={()=>{navigate("/Hostel")}}>Scholar's Hostel (Kwara Poly)</div>
  <div>Seyiddat hostel (offa poly)</div>
  <div>oooo</div>
  <div>oooo</div>
  <div>oooo</div>
  <div>oooo</div>
</div>}










    </div>
  )
}

export default NavBar