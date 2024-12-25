import React, { useState } from "react";
import HostelStyles from "../components/style_Modules/Hostel.module.css";
import NavBar from "./NavBar";
import Footer from "../components/Footer";
import { FaAngleDown } from "react-icons/fa";
import { Hourglass } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { format, addDays } from "date-fns";
import { FaCheck } from "react-icons/fa6";

const allowedDays = [2, 4, 6]; // Tuesday (2), Thursday (4), Saturday (6)

const daySpecificTimes = {
  2: "4:30 PM", // Tuesday
  4: "10:00 AM", // Thursday
  6: "4:00 PM", // Saturday
};

function Hostel() {
  const [selectedDate, setSelectedDate] = useState(null);

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

  const availableDates = generateAvailableDates();

  const navigate = useNavigate();

  const [selectedRoom, setSelectedRoom] = useState(null);
  console.log(selectedRoom);

  const handleSelectedRoom = (e) => {
    const { value } = e.target;
    setSelectedRoom(selectedRoom === value ? null : value);
  };

  return (
    <div>
      <NavBar />

      <div className={HostelStyles.header_div}>
        <h3>Hostel's name here</h3>
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

      <div>IMAGES SPACE</div>

      <section className={HostelStyles.ifo_section}>
        <div>
          <h3>INFORMATION</h3>
        </div>

        <div className={HostelStyles.key_value}>
          <div>Price: </div>
          <span>₦650,000.00</span>
        </div>

        <div className={HostelStyles.key_value}>
          <div>Hostel's Name: </div>
          <span>650,000.00</span>
        </div>

        <div className={HostelStyles.key_value}>
          <div>Unite's: </div>
          <span>650,000.00</span>
        </div>

        <div className={HostelStyles.key_value}>
          <div>Total Room: </div>
          <span>650,000.00</span>
        </div>

        <div className={HostelStyles.key_value}>
          <div>Address: </div>
          <span>650,000.00</span>
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
            <div>Select Room</div>
            <span>
              <FaAngleDown />
            </span>
          </div>

          <div className={HostelStyles.rooms_ramp_div}>
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Rooms</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className={HostelStyles.room_status}>available</td>
                  <td className={HostelStyles.room_td}>
                    Room 01{" "}
                    <input
                      type="checkbox"
                      value={"Room 01"}
                      checked={selectedRoom === "Room 01"}
                      onChange={handleSelectedRoom}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={HostelStyles.room_status}>available</td>
                  <td className={HostelStyles.room_td}>
                    Room 02{" "}
                    <input
                      type="checkbox"
                      value={"Room 02"}
                      checked={selectedRoom === "Room 02"}
                      onChange={handleSelectedRoom}
                    />
                  </td>
                </tr>
                <tr>
                  <td className={HostelStyles.room_status}>available</td>
                  <td className={HostelStyles.room_td}>
                    Room 03{" "}
                    <input
                      type="checkbox"
                      value={"Room 03"}
                      checked={selectedRoom === "Room 03"}
                      onChange={handleSelectedRoom}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={HostelStyles.select_day_time_ramp}>
            <div>Select Day & Time</div>
            <span>
              <FaAngleDown />
            </span>
          </div>

          <div>
            <div className={HostelStyles.calender_ramp}>
              {availableDates.map(({ date, time }) => (
                <div key={date} onClick={() => setSelectedDate({ date, time })}>
                  <div className={HostelStyles.days_time_ramp}>
                    {" "}
                    <div>{format(date, "EEEE, MMM d, yyyy")} </div>
                    {time}{" "}
                  </div>
                </div>
              ))}
            </div>

            <div className={HostelStyles.selected_date_time_ramp}>
              {selectedRoom && <p>Selected Room:- {selectedRoom}</p>}
              {selectedDate && (
                <p>
                  Selected Date & Time:-{" "}
                  {format(selectedDate.date, "EEEE, MMM d, yyyy")} //{" "}
                  {selectedDate.time} //
                </p>
              )}
            </div>
          </div>

          <div className={HostelStyles.agent_fee_btn}>
            <button
              onClick={() => {
                navigate("/Payment");
              }}
            >
              Pay Agent Fee
            </button>
          </div>
        </fieldset>
      </section>

      <Footer />
    </div>
  );
}

export default Hostel;
