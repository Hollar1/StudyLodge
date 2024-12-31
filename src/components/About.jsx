import React from "react";
import NavBar from "./NavBar";
import Footer from './Footer'
import AboutStyles from "../components/style_Modules/About.module.css";
import Whatsapp_logo from "../assets/images/Whatsapp_logo.png"

function About() {
  return (
    <div className={AboutStyles.parent_ramp}>
      {/* <NavBar/> */}


  <div className={AboutStyles.about_img}>About Us</div>

   
  
    

      <div className={AboutStyles.about}>
  <div className={AboutStyles.border}><a href=" https://wa.me/message/LAQB7NVLMNHVM1"><img src={Whatsapp_logo} alt="" /></a></div>
        <h4>We are Professional Realtor</h4>
        <p>
          Welcome to StudyLodge, where hospitality meets comfort. As a trusted
          students accommodation provider, we specialize in offering exceptional
          stays tailored to meet the needs of students. Our properties are
          designed with care and equipped with modern amenities to ensure a
          home-away-from-home experience for students during their academy
          sections.
        </p>

        <div>
          <h4>Who We Are</h4>

          <p>
            At StudyLodge, we pride ourselves on delivering more than
            just a place to stay. With a passion for excellence and a commitment
            to quality, our team works tirelessly to provide accommodations that
            are clean, comfortable, and conveniently located. Whether you’re
            here for a short stay, an extended stay, or a special occasion, we
            aim to make your study experience seamless and memorable.
          </p>
        </div>

        <div>
          <h4> Our Properties</h4>
          <p>
            We offer a diverse portfolio of accommodations ranging from cozy
            apartments to luxurious villas, catering to different tastes and
            budgets. Every property is thoughtfully curated to reflect a balance
            of style and functionality, ensuring our guests have everything they
            need for a relaxing and enjoyable stay.
          </p>
        </div>

        <div>
          <h4>Our Mission</h4>
          <p>
            Our mission is simple: to redefine your study experience by
            combining outstanding service with high-quality accommodations. We
            believe in creating spaces where students can unwind, connect, and
            explore with ease. At StudyLodge, we’re more than just an
            accommodation provider—we’re your trusted partner in creating
            unforgettable study experiences. Explore our properties and
            discover the difference today! For inquiries or bookings, feel free
            to reach out to us. We look forward to hosting you!
          </p>
        </div>
      </div>
      <div className={AboutStyles.gap}></div>
      <Footer/>
    </div>
  );
}

export default About;
