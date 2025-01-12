import React from "react";
import CreateHostelStyles from "../style_Modules/CreateHostel.module.css";
import { useState } from "react";
import { format, addDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const allowedDays = [2, 4, 6]; // Tuesday (2), Thursday (4), Saturday (6)

const daySpecificTimes = {
  2: "4:30 PM", // Tuesday
  4: "10:00 AM", // Thursday
  6: "4:00 PM", // Saturday
};

function CreateHostel() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [post, setPost] = useState(false);
  const handlePosted = () => {
    setPost(true);
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

  const availableDates = generateAvailableDates();

  const navigate = useNavigate();

  const [selectedRoom, setSelectedRoom] = useState(null);
  console.log(selectedRoom);

  const handleSelectedRoom = (e) => {
    const { value } = e.target;
    setSelectedRoom(selectedRoom === value ? null : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={CreateHostelStyles.parent_ramp}>
      <form onSubmit={handleSubmit}>
        <div className={CreateHostelStyles.parent_div}>
          <section className={CreateHostelStyles.parent_section}>
            <section className={CreateHostelStyles.ramp1}>
              <fieldset className={CreateHostelStyles.hostel_name}>
                <legend>Hostel's Name</legend>
                <input type="text" name="" />
              </fieldset>
              <fieldset className={CreateHostelStyles.hostel_writeUp}>
                <legend>Hostel Details</legend>
                <textarea type="text" />
              </fieldset>
              <fieldset className={CreateHostelStyles.upload_image_fieldSet}>
                <legend>Upload Images</legend>
                <input type="file" />
              </fieldset>
              <fieldset className={CreateHostelStyles.features_fieldSet}>
                <legend>Features</legend>

                <div>
                  <h4>
                    Num Bedroom:
                    <select name="" id="">
                      <option value="">select</option>
                      <option value="">1/unit</option>
                      <option value="">2/unit</option>
                      <option value="">3/unit</option>
                      <option value="">4/unit</option>
                      <option value="">5/unit</option>
                      <option value="">6/unit</option>
                      <option value="">7/unit</option>
                      <option value="">8/unit</option>
                      <option value="">9/unit</option>
                      <option value="">10/unit</option>
                      <option value="">11/unit</option>
                      <option value="">12/unit</option>
                      <option value="">13/unit</option>
                      <option value="">14/unit</option>
                      <option value="">15/unit</option>
                      <option value="">16/unit</option>
                      <option value="">17/unit</option>
                      <option value="">18/unit</option>
                      <option value="">29/unit</option>
                      <option value="">20/unit</option>
                      <option value="">21/unit</option>
                      <option value="">22/unit</option>
                      <option value="">23/unit</option>
                      <option value="">24/unit</option>
                    </select>
                  </h4>

                  <h4>
                    Num Bathroom:
                    <select name="" id="">
                      <option value="">select</option>
                      <option value="">1/unit</option>
                      <option value="">2/unit</option>
                      <option value="">3/unit</option>
                      <option value="">4/unit</option>
                      <option value="">5/unit</option>
                      <option value="">6/unit</option>
                      <option value="">7/unit</option>
                      <option value="">8/unit</option>
                      <option value="">9/unit</option>
                      <option value="">10/unit</option>
                      <option value="">11/unit</option>
                      <option value="">12/unit</option>
                      <option value="">13/unit</option>
                      <option value="">14/unit</option>
                      <option value="">15/unit</option>
                      <option value="">16/unit</option>
                      <option value="">17/unit</option>
                      <option value="">18/unit</option>
                      <option value="">29/unit</option>
                      <option value="">20/unit</option>
                      <option value="">21/unit</option>
                      <option value="">22/unit</option>
                      <option value="">23/unit</option>
                      <option value="">24/unit</option>
                    </select>
                  </h4>
                  <h4>
                    Pet Allow:
                    <select>
                      <option value="">select</option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </h4>
                  <h4>
                    Electricity:
                    <select>
                      <option value="">select</option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </h4>
                </div>

                <div>
                  <h4>
                    Min Rent:{" "}
                    <select>
                      <option value="">select</option>
                      <option value="">1 year</option>
                      <option value="">2 years</option>
                      <option value="">3 years</option>
                      <option value="">4 years</option>
                      <option value="">5 years</option>
                    </select>
                  </h4>
                  <h4>
                    Agent Fee:{" "}
                    <select>
                      <option value="">select</option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </h4>
                  <h4>
                    Commission:{" "}
                    <select>
                      <option value="">select</option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </h4>
                  <h4>
                    Caution:{" "}
                    <select>
                      <option value="">select</option>
                      <option value="">Yes</option>
                      <option value="">No</option>
                    </select>
                  </h4>
                </div>
              </fieldset>
              <section className={CreateHostelStyles.time_date_section}>
                <div className={CreateHostelStyles.select_day_time_ramp}>
                  <div>Add Day & Time Selection</div>
                  <span>
                    <div className={CreateHostelStyles.add_day_time_selection}>
                      Add
                    </div>
                  </span>
                </div>
                <div className={CreateHostelStyles.calender_ramp}>
                  {availableDates.map(({ date, time }) => (
                    <div
                      key={date}
                      onClick={() => setSelectedDate({ date, time })}
                    >
                      <div className={CreateHostelStyles.days_time_ramp}>
                        {" "}
                        <div>{format(date, "EEEE, MMM d, yyyy")} </div>
                        {time}{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </section>
            

            <section className={CreateHostelStyles.ramp2}>


            <div className={CreateHostelStyles.address}>
<fieldset><legend>Address</legend>
<input placeholder="Enter Hostel Full Address" type="text" />
</fieldset>

             </div>



              <div>
              <h3>Add Rooms</h3>
              <div className={CreateHostelStyles.fill}>
                <label className={CreateHostelStyles.room_num}>
                  room num <input type="text" />
                </label>
                <label className={CreateHostelStyles.room_unit}>
                  Unit
                  <input type="text" />
                </label>
                <label className={CreateHostelStyles.room_price}>
                  Price ₦
                  <input placeholder="470,000.00" type="text" />
                </label>

                <label className={CreateHostelStyles.room_status}>
                  Status
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Available</option>
                    <option value="">Unavailable</option>
                  </select>
                </label>
              </div>
              </div>
             

 
              
            </section>








          </section>
          
        </div>

        <div className={CreateHostelStyles.create_Hostel_btn}>
          <button type="submit">Create Hostel</button>
        </div>
      </form>
    </div>
  );
}

export default CreateHostel;
