import React from "react";
import Team_membersStyles from "../components/style_Modules/Team_member.module.css"
import NavBar from "./NavBar";
import Footer from "./Footer";


function Team_members() {
  return (
    <div className={Team_membersStyles.parent_ramp}>
      <NavBar/>
ffff



<div className={Team_membersStyles.header}>
<h3 >Team Members</h3>
</div>




    <div className={Team_membersStyles.abc}>
    <h4> Meet Our Team</h4>
      
   <p>
  Our team works together to ensure a seamless experience for
     students seeking accommodation. Here's a quick overview of the people who
     make it all happen: 
   </p>
     
     <h4> Administrative Team </h4>
<li> Office Administrators:</li>
   <p>  Responsible for handling all paperwork, including contracts, terms and
     conditions, and receipts. They maintain records, process payments, and
     address administrative inquiries. Friendly and detail-oriented, they
     ensure all documentation is accurate and timely. </p>

  <li> Customer Support Representatives: </li>
   <p>  Handle incoming inquiries from students and parents.
     Provide detailed information about available rooms and assist with booking
     processes. </p>
    </div>
      


    <div className={Team_membersStyles.abc}>  <h4>Property Managers </h4>
    <p> Oversee the maintenance and upkeep of the
      properties. Coordinate with cleaning and repair teams to ensure all rooms
      are in top condition. Act as a point of contact for issues related to
      facilities, utilities, or emergencies.</p>
      </div>
      
  <div className={Team_membersStyles.abc}>
<h4>  Marketing and Outreach Team</h4>
      <p>Responsible for promoting available accommodations through various
      platforms. Organize open house events and manage social media accounts to
      share updates. Work closely with agents to ensure accurate listings and
      visual representation of properties. </p>
  </div>
      
    <div className={Team_membersStyles.abc}>
   <h4>Field Agents</h4>
   <p>   Show rooms to
      students, ensuring they find the perfect match for their needs. Provide
      in-depth tours, highlighting room features, amenities, and property rules.
      Answer questions about leases, community guidelines, and local services.
      Act as the face of our company, offering a friendly and professional
      experience. </p>
    </div>
      
  <div className={Team_membersStyles.abc}>
<h4> Maintenance and Support Staff</h4>
 <p>     Handle repairs, cleaning, and
      other essential tasks to maintain a high standard of living. Available to
      address maintenance requests promptly. </p>
  </div>
      
   <div className={Team_membersStyles.abc}>
  <h4> Our Commitment</h4>
      From the admin staff
      managing paperwork to the agents helping you explore properties, each
      member of our team is dedicated to making your accommodation journey
      smooth and enjoyable. We’re here to help every step of the way!
    </div>

      <Footer/>
    </div>
  );
}

export default Team_members;
