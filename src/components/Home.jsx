import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import HomeStyles from "../components/style_Modules/Home.module.css";
import Footer from "./Footer";
import Whatsapp_logo from "../assets/images/Whatsapp_logo.png";
import House_image from "../assets/images/House.png";
import House_image_001 from "../assets/images/3d3-1.png";

import {
  FaHandHoldingDollar,
  FaHandshake,
  FaScaleBalanced,
  FaMapLocationDot,
  FaArrowRight,
  FaPhoneVolume,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

// import hostel_image_001 from "../assets/images/hostel_image_001.jpg";
// import Hostel_003 from "../assets/images/Hostel_003.jpg";
// import Online_image_001 from "../assets/images/Online_image_001.jpeg";
// import Online_image_002 from "../assets/images/Online_image_002.jpeg";
// import Online_image_003 from "../assets/images/Online_image_003.jpg";
import Studio_room from "../assets/images/Studio_room.jpg";
import Share_room from "../assets/images/Share_room.webp";
import Single_bed_room from "../assets/images/Single_bed_rom.jpg";
import double_bed_room from "../assets/images/double_bed_room.jpg";
import Furnished_room from "../assets/images/Furnished_room.jpg";

import Online_booking_video_001 from "../assets/images/Online_booking_video.mp4";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
import '/custom-carousel.css';

function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    pauseOnOHover: true,
    pauseOnFocus: true,

    autoplaySpeed: 3000,
    rtl: false, // Default is false for sliding right
  };

  const navigate = useNavigate();
  return (

<div>

    <div className={HomeStyles.parent_ramp}>
      <NavBar />
      
        <div className={HomeStyles.display_parent_div}>
          <div className={HomeStyles.display_ramp}>
            <Carousel
              showArrows={false}
              autoPlay
              infiniteLoop={true}
              autoFocus={false}
              interval={3000}
              showIndicators={false}
              showThumbs={false}
            >
              <div className={HomeStyles.display}>
                <h3>Home Away Home For Students</h3>
                <p>
                  Our hostels are more than just a place to stay; it's a home
                  away home for all students. Embrace the sense of community
                  support and friendship that makes this place truly special
                </p>
              </div>

              <div className={HomeStyles.display}>
                <h3>Various Preferences and budget</h3>
                <p>
                  We understand the importance of managing budget while pursuing
                  your education, our hostels is committed to being affordable,
                  offering a range of accommodation options that cater to
                  various budgets.{" "}
                </p>
              </div>

              <div className={HomeStyles.display}>
                <h3>Rent Accommodation</h3>
                <p>
                  In an era where accessibility and affordability are paramount
                  for students, our company stands as a beacon offering
                  innovative solutions to address fundamental needs of students.{" "}
                </p>
              </div>
            </Carousel>
          </div>
          <div className={HomeStyles.btn_div}>
            <button>Book Inspection</button>
          </div>
        </div>
        <div className={HomeStyles.whatsapp}>
          <a href="https://wa.me/message/LAQB7NVLMNHVM1">
            {" "}
            <img src={Whatsapp_logo} alt="" />
          </a>
        </div>
        <section className={HomeStyles.trusted}>
          <h3>We are trusted partner in quality student accommodation! </h3>

         
          <p>
            StudyLodge, we take pride in offering a wide range of comfortable,
            secure, and contemporary housing solutions carefully designed to
            meet the unique needs of students. With extensive experience in the
            student accommodation industry, we understand the importance of
            creating an environment where students feel safe, supported, and
            inspired. Our mission is to provide more than just a place to stay —
            we strive to deliver the perfect home-away-from-home experience,
            ensuring students can focus on their academic journey while enjoying
            a vibrant and welcoming community.
          </p>
        </section>

        <section className={HomeStyles.our_services}>
          <h3>Our Student Accommodation Services</h3>
          <p>
            We provide a range of living spaces designed to cater to various
            preferences and needs. Here's an overview of the services we offer:
          </p>

          <Carousel
            showArrows
             autoPlay={false}
            infiniteLoop={true}
            autoFocus={false}
            interval={4000}
            showIndicators={false}
            showThumbs={false}
          
          >
            <div className={HomeStyles.our_services_div}>
              <img src={Single_bed_room} alt="" />
              <h4 className={HomeStyles.header}>Studios:</h4>
              <p   className={HomeStyles.top_writeUp}>
                Our studio apartments are fully self-contained units, ideal for
                students who value privacy and independence. Each studio comes
                with its own private kitchen and bathroom, allowing you to enjoy
                a complete living space that's exclusively yours. Studios are
                perfect for focused study, relaxation, and personal comfort.
              </p>
            </div>

            <div className={HomeStyles.our_services_div}>
              <img src={Studio_room} alt="" />
              <h4 className={HomeStyles.header}>En-suite Rooms:</h4>
              <p className={HomeStyles.top_writeUp}>
                En-suite rooms offer a private bedroom and a personal bathroom,
                giving you the privacy you need while being part of a community.
                These rooms are part of a shared living setup, where common
                areas like the kitchen and lounge are shared with other
                residents. It's a great option for students who want a balance
                between privacy and social interaction.
              </p>
            </div>

            <div className={HomeStyles.our_services_div}>
              <img src={double_bed_room} alt="" />
              <h4 className={HomeStyles.header}>Shared Flats:</h4>
              <p className={HomeStyles.top_writeUp}>
                Shared flats feature multiple bedrooms within a single
                apartment, with shared facilities such as kitchens and living
                rooms. This is an excellent choice for students who enjoy living
                in a group setting, fostering a sense of community and
                collaboration. Shared flats offer a cost-effective and social
                way to experience student life.
              </p>
            </div>

            <div className={HomeStyles.our_services_div}>
              <img src={Furnished_room} alt="" />
              <h4 className={HomeStyles.header}>Furnished Rooms:</h4>
              <p className={HomeStyles.top_writeUp}>
                All our accommodation options come with furnished rooms,
                ensuring you have everything you need from day one. Each room is
                equipped with essentials like a bed, desk, chair, and ample
                storage space. This eliminates the hassle of buying or
                transporting furniture, allowing you to focus on your studies
                and settling into your new home.
              </p>
            </div>
          </Carousel>
          <p className={HomeStyles.prefer}>
            {" "}
            Whether you prefer the solitude of a studio, the semi-private setup
            of an en-suite room, or the camaraderie of shared flats, our
            accommodations are designed to suit diverse lifestyles and needs.
          </p>
        </section>

        <div></div>

        <section className={HomeStyles.why_chooseUs}>
          <h3>Why Choose Us ?</h3>
          <p className={HomeStyles.why_rent}>
            Why Rent with StudyLodge Limited.?
          </p>

          <div className={HomeStyles.abc}>
            <div className={HomeStyles.icon}>
              <FaHandHoldingDollar />
            </div>
            <div className={HomeStyles.div_p}>
              <h4>Affordability</h4>
              <p>
                We offer a range of pricing options to fit various budgets,
                ensuring students get the best value for their money.
              </p>
            </div>
          </div>

          <div className={HomeStyles.abc}>
            <div className={HomeStyles.icon}>
              <FaHandshake />
            </div>
            <div className={HomeStyles.div_p}>
              <h4>Trust</h4>
              <p>
                Our commitment to providing exceptional service has earned the
                trust of our valued customers. We ensuring reliability, quality,
                and care in everything we do.
              </p>
            </div>
          </div>

          <div className={HomeStyles.abc}>
            <div className={HomeStyles.icon}>
              <FaScaleBalanced />
            </div>
            <div className={HomeStyles.div_p}>
              <h4>Best Policies</h4>
              <p>
                We pride ourselves on offering top-notch policies that
                prioritize your needs, we aim to make your stay as seamless and
                enjoyable as possible..
              </p>
            </div>
          </div>

          <div className={HomeStyles.abc}>
            <div className={HomeStyles.icon}>
              <FaMapLocationDot />
            </div>
            <div className={HomeStyles.div_p}>
              <h4>Affordability</h4>
              <p>
                Our properties are strategically located near major
                universities, colleges, and public transport, ensuring
                convenience and accessibility.
              </p>
            </div>
          </div>
        </section>

        <div className={HomeStyles.online_video_background}>
          <video
            autoPlay
            loop
            muted
            controls
            src={Online_booking_video_001}
          ></video>
          <div>
            <h3>Online Rental Process</h3>

            <p>
              Renting accommodation with StudyLodge is an entirely online
              process designed for convenience and efficiency. Here's a
              step-by-step guide:
            </p>
            <span className={HomeStyles.btn_span}>
              {" "}
              <button
                onClick={() => {
                  navigate("/OnlineProcess");
                }}
              >
                Read More
              </button>
            </span>
          </div>
        </div>

        <section className={HomeStyles.review_ramp}>
          <h3>What Student Think Of Us</h3>

          <div className={HomeStyles.comments_ramp}>
            <Slider {...settings}>
              <div>
                <div className={HomeStyles.reviewer_names}>Aisha Abdullahi</div>
                <p>
                  "The location of the accommodation is ideal for students like
                  me, as it is only a short walk from the campus, and there are
                  also great public transport links nearby. It makes commuting
                  effortless and saves me a lot of time."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Chukwudi Okeke</div>
                <p>
                  "The shared kitchen has been thoughtfully designed, with
                  plenty of cooking space and modern appliances. It’s always
                  kept clean, and I’ve found it really easy to cook and share
                  meals with my flatmates."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>
                  Ibrahim Sulaiman
                </div>
                <p>
                  "Living here has been a great experience overall, but I feel
                  the kitchen could be improved with more storage space for each
                  resident. With multiple people sharing, it sometimes feels a
                  little cramped."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Ngozi Ezeani</div>
                <p>
                  "The internet speed has been consistently excellent, even
                  during peak hours. As someone who relies on online classes and
                  video calls for my coursework, having such reliable Wi-Fi has
                  been a game-changer."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Emeka Nwankwo</div>
                <p>
                  "I’m really impressed by how spacious and bright my room is.
                  The large windows let in so much natural light, which makes
                  studying in my room much more enjoyable. It feels cozy yet
                  functional, which is perfect for student life."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Ahmed Yusuf</div>
                <p>
                  "While the common areas are great for socializing, they can
                  sometimes get quite loud late at night. Implementing quiet
                  hours or soundproofing could help address this."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Ifeoma Okafor</div>
                <p>
                  "The sense of community in this accommodation is fantastic.
                  There are always events being organized, from movie nights to
                  game tournaments, which have helped me make some amazing
                  friends."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Musa Bello</div>
                <p>
                  "The staff is friendly, but there have been occasions where it
                  took longer than expected for a maintenance issue to be
                  resolved."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Sunday Adeyemi</div>
                <p>
                  "Having a private en-suite bathroom has been such a wonderful
                  feature. It’s always clean, and I don’t have to worry about
                  sharing it with others. It makes my daily routine much more
                  convenient."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Fatima Mohammed</div>
                <p>
                  "The heating and air-conditioning systems are excellent,
                  keeping my room at a comfortable temperature regardless of the
                  season. I’ve never had to worry about being too hot or too
                  cold."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>
                  Blessing Johnson
                </div>
                <p>
                  "The room is great, but I do wish there were more power
                  outlets for charging all my devices. It can be a bit
                  inconvenient to rely on extension cords all the time."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Aminu Shehu</div>
                <p>
                  "Having access to a gym on-site is such a luxury as a student.
                  It’s well-equipped, clean, and open at convenient hours,
                  making it easy to maintain a healthy lifestyle despite my busy
                  schedule."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Chioma Anozie</div>
                <p>
                  "The accommodation is decent, but I feel the furniture is
                  starting to show its age. Updating it with more modern,
                  ergonomic options would make a big difference."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Abdullahi Umar</div>
                <p>
                  "The rent is very reasonable, especially considering all the
                  amenities included, such as the gym, study rooms, and
                  high-speed internet. It offers great value for money."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>
                  Joseph Onyekwere
                </div>
                <p>
                  "The maintenance team deserves a special mention for being so
                  efficient. Anytime something needs fixing, they’re quick to
                  respond, and they always do a thorough job."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Hauwa Kabiru</div>
                <p>
                  "The recycling system could be improved with clearer
                  instructions or better placement of bins. It would encourage
                  more residents to recycle properly."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Chinyere Nwosu</div>
                <p>
                  "The common areas are inviting and comfortable, with plenty of
                  seating and even a few games like table tennis. It’s a great
                  place to hang out with friends and unwind after a long day of
                  classes."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Sani Danjuma</div>
                <p>
                  "The location is perfect not only for getting to campus but
                  also for running errands, as there are plenty of shops,
                  supermarkets, and cafes just a short walk away."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Eze Okwudili</div>
                <p>
                  "The elevators are convenient, but they can be quite slow,
                  particularly during peak hours when everyone is heading to or
                  from classes."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>
                  Olatunde Adegboyega
                </div>
                <p>
                  "I really enjoy the social events that are organized here, but
                  I think it would be great to have some workshops or academic
                  sessions to complement the fun activities."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Zainab Usman </div>
                <p>
                  "I love that the accommodation provides dedicated study areas.
                  These spaces are quiet, well-lit, and equipped with
                  comfortable seating, making them perfect for focused study
                  sessions without any distractions."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Benjamin Chukwu</div>
                <p>
                  "The Wi-Fi is usually fast and reliable, but during exam
                  periods, there are occasional slowdowns when everyone is
                  online at the same time. Boosting the bandwidth could help
                  resolve this."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Kabiru Adamu</div>
                <p>
                  "I’m happy with my stay here, but I’ve noticed that weekends
                  can get a little noisy, especially with people socializing in
                  the common areas. It would be nice if there were better
                  soundproofing in place."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Adaobi Orji</div>
                <p>
                  "The heating system works well overall, but I’ve noticed that
                  the windows could use better insulation. Sometimes during
                  winter, the room gets a little drafty."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Yusuf Suleiman</div>
                <p>
                  "The laundry facilities are very convenient and easy to use.
                  The app-based system means I can monitor when my load is ready
                  without needing to stay nearby, which is super helpful."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Samuel Ezeocha</div>
                <p>
                  "The water pressure in the showers is usually fine, but during
                  peak hours, it can fluctuate. It’s not a major issue, but some
                  consistency would be appreciated."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Umar Garba</div>
                <p>
                  "The design and layout of the accommodation feel modern and
                  fresh. It’s clear that a lot of thought has gone into creating
                  a comfortable environment for students."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Obi Akachukwu</div>
                <p>
                  "Overall, the place is great, but improving the recycling
                  system with clearer instructions or more accessible bins would
                  make it even better."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>
                  Abubakar Shagari
                </div>
                <p>
                  "Safety is a top priority here, and I feel very secure knowing
                  there are cameras in the common areas and controlled access to
                  the building. It gives me peace of mind as a student living
                  away from home."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Esther Ozioma</div>
                <p>
                  "The room has everything I need, but a few more built-in
                  storage options, like extra shelves or a larger wardrobe,
                  would be very useful for organizing my belongings."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Halima Gambo</div>
                <p>
                  "The facilities are generally very good, but the laundry room
                  gets quite busy during peak times. Adding a few more washing
                  machines would make things much smoother."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Nneka Obianuju</div>
                <p>
                  "Having a small convenience store or vending machines on-site
                  would make life so much easier, especially for quick snacks or
                  essentials."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Bashir Lawal</div>
                <p>
                  "The staff here are incredibly friendly and approachable. Any
                  time I’ve had an issue, whether it’s a minor maintenance
                  request or a question about the facilities, they’ve resolved
                  it quickly and professionally."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Daniel Ikenna</div>
                <p>
                  "It feels very safe here, with secure access and cameras in
                  common areas, my properties are always untouched throughout my
                  stay in the accommodation. I will come back for my HND."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Gambo Aliyu</div>
                <p>
                  "The room itself is lovely, but I do wish there were a few
                  more power outlets for charging all my devices. It can be a
                  bit inconvenient to rely on extension cords all the time."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>Mary Udeh</div>
                <p>
                  "The noise levels are surprisingly well-managed. Even during
                  exam season, I’ve been able to focus on my studies without any
                  disturbances from other residents."
                </p>
              </div>

              <div>
                <div className={HomeStyles.reviewer_names}>
                  Kolawole Temitope
                </div>
                <p>
                  "Overall, it’s a great place to live, though the kitchen could
                  use more storage space, but the toilet is super clean and neat
                  always"
                </p>
              </div>
            </Slider>
          </div>

          <div className={HomeStyles.see_all_review}>
            <button
              onClick={() => {
                navigate("/Reviews", { preventScrollReset: false });
              }}
            >
              See All Reviews <FaArrowRight />{" "}
            </button>
          </div>
        </section>

        <section className={HomeStyles.customer_care_ramp}>
          <h3>We'are Here To Help</h3>
          <p>
            Our team is committed to being available whenever you need us. From
            answering your questions to resolving issues, we’re here to make
            sure your experience with us is seamless and stress-free."
          </p>

          <div className={HomeStyles.contact_ramp}>
            <div>
              <FaPhoneVolume />
              <a href="tel:+2347067276727">+2347067276727</a>
            </div>

            <div>
              <FaEnvelope />
              <a href="mailto:studylodge@gmail.com">admin@studylodge.com</a>
            </div>

            <div>
              <FaLocationDot className={HomeStyles.map_icon} />
              <span>F/ab55, Iku, Ikare Akoko Ondo, State, Nigeria.</span>
            </div>
          </div>
        </section>

        <Footer />
      </div>
   
    </div>
  );
}

export default Home;
