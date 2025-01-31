import React, { useState } from "react";
import HostelStyles from "../components/style_Modules/Hostel.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageGallery from 'react-image-gallery'; // Correct import
import 'react-image-gallery/styles/css/image-gallery.css'; // Ensure the styles are included

import NavBar from "./NavBar";
import Footer from "../components/Footer";
import { FaAngleDown } from "react-icons/fa";
import { Hourglass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { format, addDays } from "date-fns";
import { FaCheck } from "react-icons/fa6";
import bedRoom from "../assets/images/Double_bed_room.jpg"
import emptyRoom from "../assets/images/Empty_room.jpg"
import Hostel_003 from "../assets/images/Hostel_003.jpg"
import kitchen from "../assets/images/kitch.jpg"
import singleRoom from "../assets/images/Single_bed_rom.jpg"
import toilet from "../assets/images/Toilet-1.jpg"
import logo from "../assets/images/new_logo_001.png"

const allowedDays = [2, 4, 6]; // Tuesday (2), Thursday (4), Saturday (6)

const daySpecificTimes = {
  2: "4:30 PM", // Tuesday
  4: "10:00 AM", // Thursday
  6: "4:00 PM", // Saturday
};

function Hostel() {
  // const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedModal, setSelectedModal] = useState(false);
  const [showRoom,setShowRoom]=useState(false)
  const [showCalender,setShowCalender]=useState(false)

  const handelShowRoom =()=>{
setShowRoom(!showRoom)
  }


  const handelShowCalender =()=>{
setShowCalender(!showCalender)
  }




  const images = [
    {
      original: Hostel_003,
      thumbnail: Hostel_003,
    },
    {
      original: singleRoom,
      thumbnail: singleRoom,
    },

    {
      original: kitchen,
      thumbnail: kitchen,
    },

    {
      original: toilet,
      thumbnail: toilet,
    },

    {
      original: emptyRoom,
      thumbnail: emptyRoom,
    },
    {
      original: bedRoom,
      thumbnail: bedRoom,
    },
    {
      original: logo,
      thumbnail: logo,
    },



  ];
  




  const handlePayAgentFee = () => {
    if (!selectedDate || !selectedRoom) {
      alert("Room or Inspect date and time have not selected");
    } else {
      setSelectedModal(true);
    }
  };
  // Generate next 14 days and filter allowed days
  const generateAvailableDates = () => {
    const today = new Date();
    let dates = [];
    for (let i = 0; i < 14; i++) {
      const date = addDays(today, i);
      const day = date.getDay();
      if (allowedDays.includes(day)) {
        dates.push({
          date,
          time: daySpecificTimes[day], // Add specific time
        });
      }
    }
    return dates;
  };

  // State to store the selected date (initially set to null)
 

  // Function to check if the day is Tuesday, Thursday, or Saturday and set the time accordingly
  const setTimeForSelectedDay = (date) => {
    const day = date.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, 2 for Tuesday, etc.
    let updatedDate = new Date(date);

    if (day === 2) {
      // Tuesday
      updatedDate.setHours(16, 30, 0, 0); // Set time to 4:30 PM
    } else if (day === 4) {
      // Thursday
      updatedDate.setHours(10, 0, 0, 0); // Set time to 10:00 AM
    } else if (day === 6) {
      // Saturday
      updatedDate.setHours(16, 0, 0, 0); // Set time to 4:00 PM
    }

    return updatedDate;
  };

  // Function to check if the day is Tuesday, Thursday, or Saturday
  const isSelectableDate = (date) => {
    const day = date.getDay();
    return day === 2 || day === 4 || day === 6; // 2 = Tuesday, 4 = Thursday, 6 = Saturday
  };

  // Format the selected date to Day-Month-Year format
  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-GB", {
        weekday: "long", // "Monday"
        year: "numeric", // "2025"
        month: "long", // "January"
        day: "numeric", // "31"
      })
    : "No date selected";

  // Format the selected date to Day-Month-Year (DD-MM-YYYY)
  const shortFormattedDate = selectedDate
    ? selectedDate.toLocaleDateString("en-GB", {
        day: "2-digit", // "31"
        month: "2-digit", // "01"
        year: "numeric", // "2025"
      })
    : "No date selected";

  // Format time in 12-hour format with AM/PM
  const timeFormatted = selectedDate
    ? selectedDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // Enables 12-hour format with AM/PM
      })
    : "No time selected";

  const availableDates = generateAvailableDates();

  const navigate = useNavigate();

  const handleSelectedRoom = (e) => {
   handelShowRoom()
    const { value } = e.target;
    setSelectedRoom(selectedRoom === value ? null : value);
  };

  const handleNo = () => {
    setSelectedDate("");
    setSelectedRoom("");
    setSelectedModal(false);
    setShowCalender("")
  };

  return (
    <div>
      <NavBar />

      <div className={HostelStyles.header_div}>
        <h3>Scholar's Hostel</h3>
      </div>
      {/* accommodation_details_div_ramp */}
      <div className={HostelStyles.accommodation_details_div_ramp}>
        <div>
          {" "}
          <h3>ACCOMMODATION DETAILS</h3>
        </div>
      </div>

      <div className={HostelStyles.about_hostel_div}>
        Living in this our prestigious hostel with just three rooms on a
        half-plot of land offers a unique and enriching experience for students.
        The limited number of residents creates a peaceful and personalized
        environment, making it easier to focus on studies while fostering
        meaningful relationships. The atmosphere is more intimate and
        supportive, encouraging a sense of community where students can build
        lasting friendships. With fewer occupants, privacy and comfort are
        naturally enhanced. There’s no need to worry about overcrowded spaces or
        competing for essential facilities. This setting feels more like home,
        providing a secure and welcoming space where students can relax and
        concentrate on their academic goals.
      </div>

      {/* accommodation_details_div_ramp */}

     
     
      <div>
      <h1>Hostel Gallery</h1>
      <ImageGallery 
items={images}
autoPlay={false}
    showThumbnails={true}
    slideInterval={3000}
    thumbnailPosition="bottom"
 />
    </div>



















      <section className={HostelStyles.ifo_section}>
        <div>
          <h3>Hostel's Address</h3>
        </div>
        <div className={HostelStyles.hostel_address}>
          Number 35 Olorunshogo Street, Ara Village, Ilorin, Kwara State.
        </div>
      </section>

      <section className={HostelStyles.feature_section}>
        <h3>Features</h3>

        <div className={HostelStyles.key_valueA}>
          <div>
            Num Bedroom: <span>1</span>
          </div>
          <div>
            Num Bathroom: <span>1</span>
          </div>
        </div>

        <div className={HostelStyles.key_valueA}>
          <div>
            pet allow: <span>no</span>
          </div>
          <div>
            electricity: <span>yes</span>
          </div>
        </div>

        <div className={HostelStyles.key_valueA}>
          <div>
            rent tenure: <span>1 year</span>
          </div>
          <div>
            agent fee: <span>1</span>
          </div>
        </div>

        <div className={HostelStyles.key_valueA}>
          <div>
            commission fee: <span>no</span>
          </div>
          <div>
            caution fee: <span>1</span>
          </div>
        </div>
      </section>

      <section className={HostelStyles.booking_section}>
        <fieldset>
          <legend>BOOK INSPECTION</legend>
          <div className={HostelStyles.nonrefundable_div}>
            <span style={{ color: "red", fontWeight: "bold" }}>Note:</span>{" "}
            ₦10,000.00 Nonrefundable agent fee applies.
          </div>

          <div className={HostelStyles.select_room_ramp}>
            <div onClick={handelShowRoom}>Select Room         {selectedRoom?<span>selected</span>:<span>not selected</span>}  </div>
            <span onClick={handelShowRoom}>
              <FaAngleDown />
            </span>
          </div>

        { showRoom&&<section className={HostelStyles.selectedRoom_section}>
            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 01 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 01"}
                  checked={selectedRoom === "Room 01"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 02 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 02"}
                  checked={selectedRoom === "Room 02"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 03 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 03"}
                  checked={selectedRoom === "Room 03"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 04 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 04"}
                  checked={selectedRoom === "Room 04"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 05 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 05"}
                  checked={selectedRoom === "Room 05"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 06 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 06"}
                  checked={selectedRoom === "Room 06"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 07 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 07"}
                  checked={selectedRoom === "Room 07"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 08 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 08"}
                  checked={selectedRoom === "Room 08"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 09 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 09"}
                  checked={selectedRoom === "Room 09"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />

            <div className={HostelStyles.parent_ramp}>
              <div>
                <h3>Room 10 </h3>
                <div>
                  Unit: <span>A Room Self'Contain</span>
                </div>
                <div>
                  Price: <span>₦670,000.00</span>
                </div>
                <div>
                  Status: <span>Available</span>
                </div>
              </div>

              <div>
                {" "}
                <input
                  className={HostelStyles.the_checkbox}
                  type="checkbox"
                  value={"Room 10"}
                  checked={selectedRoom === "Room 10"}
                  onChange={handleSelectedRoom}
                />
              </div>
            </div>
            <hr />
          </section>}

          <div className={HostelStyles.select_day_time_ramp}>
            <div onClick={handelShowCalender}>Select Day & Time {selectedDate?<span>selected</span>:<span>not selected</span>}  </div>
            <span onClick={handelShowCalender}>
              <FaAngleDown />
            </span>
          </div>

     {selectedDate ? "": <div>
      { showCalender&&  <div className={HostelStyles.calender_div}>
            <DatePicker
              selected={selectedDate} // Bind the selected date to state
              onChange={(date) => setSelectedDate(setTimeForSelectedDay(date))} // Update state when the date changes
              filterDate={isSelectableDate} // Apply filter to allow only specific days
              inline
            />
            //{" "}
           
          </div>}
      </div>}





          {selectedModal && (
              <div className={HostelStyles.selected_date_time_ramp}>
                <h4>PLEASE CONFIRM BOOKING</h4>
                <p>Selected Room:- {selectedRoom}</p>
                {selectedDate && (
                  <div>
                    <p>Selected Date:- {formattedDate}</p>
                    <p> Selected Time:- {timeFormatted} </p>
                    <div className={HostelStyles.no_yes}>
                      <button onClick={handleNo}>Close</button>{" "}
                      <button
                        onClick={() => {
                          navigate("/Payment");
                        }}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}





          <div className={HostelStyles.agent_fee_btn}>
            <button onClick={handlePayAgentFee}>Pay Agent Fee</button>
          </div>
        </fieldset>
      </section>

      <Footer />
    </div>
  );
}

export default Hostel;

