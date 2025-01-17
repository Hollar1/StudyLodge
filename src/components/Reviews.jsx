import React from "react";
import ReviewStyles from "../components/style_Modules/Reviews.module.css";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { useState, useEffect } from "react";
import LoginStyles from "./style_Modules/Login.module.css";
import { Vortex } from "react-loader-spinner";
import { baseUrl } from "./Config";
import Notify from "./Notify";
import axios from "axios";
import { data } from "react-router-dom";

function Reviews() {
  const [comment, setComment] = useState("");
  const [reviewerName, setReviewerName] = useState("");
  const [rating, setRating] = useState(0);
  const [submittedData, setSubmittedData] = useState([]);
  const [signUpModal, setSignUpModal] = useState(false);
  const [signUpSpinner, setSignUpSpinner] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const getReview = async () => {
    setSignUpSpinner(true);
    try {
      const url = `${baseUrl}/review/view`;
      const response = await axios.get(url);
      if (response.data.Error === false) {
        setSubmittedData(response.data.Data);
      } else {
        Notify({
          title: "Error",
          message:
            response.data.Error ||
            "An unexpected error occurred while loading review",
          type: "danger",
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.Error ||
        error.message ||
        "An error occurred while loading review";
      Notify({
        title: "Error",
        message: errorMessage,
        type: "danger",
      });
    } finally {
      setSignUpSpinner(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSignUpSpinner(true);

    try {
      const fd = new FormData();
      fd.append("FullName", reviewerName);
      fd.append("Comment", comment);
      fd.append("Rating", rating);
      const url = `${baseUrl}/review`;
      const response = await axios.post(url, fd);
      if (response.data.Error === false) {
        Notify({
          title: "success",
          message: "Review  successfully Submitted",
          type: "success",
        });
        getReview();
      } else {
        Notify({
          title: "Error",
          message: response.data.Error || "An unexpected error occurred",
          type: "danger",
        });
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.Error || error.message || "An error occurred";
      Notify({
        title: "Error",
        message: errorMessage,
        type: "danger",
      });
    } finally {
      setSignUpSpinner(false);
      setReviewerName("");
      setComment("");
      setRating("");
    }
  };

  const RatingStars = ({ rating, onChange, readOnly = false }) => {
    const stars = [1, 2, 3, 4, 5];

    return (
      <div>
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => !readOnly && onChange(star)}
            style={{
              color: star <= rating ? "black" : "grey",
              marginRight: "4px",
            }}
          >
            <FaStar />
          </span>
        ))}
      </div>
    );
  };

  useEffect(() => {
    getReview();
    console.log("Ola");
  }, []);

  return (
    <div className={ReviewStyles.parent_ramp}>
      <div className={ReviewStyles.Review_parent_ramp}>
        <form onSubmit={handleSubmit}>
          <h3 className={ReviewStyles.leave_comment}>
            Leave a Comment and Rating
          </h3>
          <section className={ReviewStyles.reviewer_name_section}>
            <fieldset>
              <legend>Full Name</legend>
              <input
                value={reviewerName}
                onChange={(e) => {
                  setReviewerName(e.target.value);
                }}
                type="text"
              />
            </fieldset>
          </section>

          <section className={ReviewStyles.write_review_box_section}>
            <fieldset>
              <legend>Review</legend>
              <textarea
                rows="4"
                cols="40"
                placeholder="Write your comment here..."
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
            </fieldset>
          </section>

          <div className={ReviewStyles.stars}>
            <RatingStars rating={rating} onChange={handleRatingChange} />
          </div>
          <div className={ReviewStyles.btn_div}>
            <button>Submit Review</button>
          </div>
        </form>
      </div>

      <section className={ReviewStyles.all_review_section}>
        <div className={ReviewStyles.header}>
          <h3>Reviewers</h3>
        </div>
        <div>
          <div>
            {submittedData.map((data, index) => (
              <div key={index}>
                <div className={ReviewStyles.name_star}>
                  <div>{data.FullName}</div>
                  <div className={ReviewStyles.star}>
                    {" "}
                    <RatingStars rating={data.Rating} readOnly={true} />
                  </div>
                </div>

                <p className={ReviewStyles.p}>{data.Comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Aisha Abdullahi{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The location of the accommodation is ideal for students like me, as
            it is only a short walk from the campus, and there are also great
            public transport links nearby. It makes commuting effortless and
            saves me a lot of time."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Chukwudi Okeke{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <p>
            "The shared kitchen has been thoughtfully designed, with plenty of
            cooking space and modern appliances. It’s always kept clean, and
            I’ve found it really easy to cook and share meals with my
            flatmates."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Ibrahim Sulaiman{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "Living here has been a great experience overall, but I feel the
            kitchen could be improved with more storage space for each resident.
            With multiple people sharing, it sometimes feels a little cramped."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Ngozi Ezeani{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The internet speed has been consistently excellent, even during
            peak hours. As someone who relies on online classes and video calls
            for my coursework, having such reliable Wi-Fi has been a
            game-changer."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Emeka Nwankwo{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "I’m really impressed by how spacious and bright my room is. The
            large windows let in so much natural light, which makes studying in
            my room much more enjoyable. It feels cozy yet functional, which is
            perfect for student life."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Ahmed Yusuf{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "While the common areas are great for socializing, they can
            sometimes get quite loud late at night. Implementing quiet hours or
            soundproofing could help address this."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Ifeoma Okafor{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The sense of community in this accommodation is fantastic. There
            are always events being organized, from movie nights to game
            tournaments, which have helped me make some amazing friends."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Musa Bello{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The staff is friendly, but there have been occasions where it took
            longer than expected for a maintenance issue to be resolved."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Sunday Adeyemi{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "Having a private en-suite bathroom has been such a wonderful
            feature. It’s always clean, and I don’t have to worry about sharing
            it with others. It makes my daily routine much more convenient."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Fatima Mohammed{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The heating and air-conditioning systems are excellent, keeping my
            room at a comfortable temperature regardless of the season. I’ve
            never had to worry about being too hot or too cold."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Blessing Johnson{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The room is great, but I do wish there were more power outlets for
            charging all my devices. It can be a bit inconvenient to rely on
            extension cords all the time."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Aminu Shehu{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "Having access to a gym on-site is such a luxury as a student. It’s
            well-equipped, clean, and open at convenient hours, making it easy
            to maintain a healthy lifestyle despite my busy schedule."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Chioma Anozie{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The accommodation is decent, but I feel the furniture is starting
            to show its age. Updating it with more modern, ergonomic options
            would make a big difference."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Abdullahi Umar{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The rent is very reasonable, especially considering all the
            amenities included, such as the gym, study rooms, and high-speed
            internet. It offers great value for money."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Joseph Onyekwere{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The maintenance team deserves a special mention for being so
            efficient. Anytime something needs fixing, they’re quick to respond,
            and they always do a thorough job."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Hauwa Kabiru{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The recycling system could be improved with clearer instructions or
            better placement of bins. It would encourage more residents to
            recycle properly."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Chinyere Nwosu{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The common areas are inviting and comfortable, with plenty of
            seating and even a few games like table tennis. It’s a great place
            to hang out with friends and unwind after a long day of classes."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Sani Danjuma{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The location is perfect not only for getting to campus but also for
            running errands, as there are plenty of shops, supermarkets, and
            cafes just a short walk away."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Eze Okwudili{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The elevators are convenient, but they can be quite slow,
            particularly during peak hours when everyone is heading to or from
            classes."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Olatunde Adegboyega{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "I really enjoy the social events that are organized here, but I
            think it would be great to have some workshops or academic sessions
            to complement the fun activities."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Zainab Usman{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "I love that the accommodation provides dedicated study areas. These
            spaces are quiet, well-lit, and equipped with comfortable seating,
            making them perfect for focused study sessions without any
            distractions."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Benjamin Chukwu{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The Wi-Fi is usually fast and reliable, but during exam periods,
            there are occasional slowdowns when everyone is online at the same
            time. Boosting the bandwidth could help resolve this."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Kabiru Adamu{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "I’m happy with my stay here, but I’ve noticed that weekends can get
            a little noisy, especially with people socializing in the common
            areas. It would be nice if there were better soundproofing in
            place."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Adaobi Orji{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The heating system works well overall, but I’ve noticed that the
            windows could use better insulation. Sometimes during winter, the
            room gets a little drafty."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Yusuf Suleiman{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The laundry facilities are very convenient and easy to use. The
            app-based system means I can monitor when my load is ready without
            needing to stay nearby, which is super helpful."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Samuel Ezeocha{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The water pressure in the showers is usually fine, but during peak
            hours, it can fluctuate. It’s not a major issue, but some
            consistency would be appreciated."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Umar Garba{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The design and layout of the accommodation feel modern and fresh.
            It’s clear that a lot of thought has gone into creating a
            comfortable environment for students."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Obi Akachukwu
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "Overall, the place is great, but improving the recycling system
            with clearer instructions or more accessible bins would make it even
            better."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Abubakar Shagari{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "Safety is a top priority here, and I feel very secure knowing there
            are cameras in the common areas and controlled access to the
            building. It gives me peace of mind as a student living away from
            home."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Esther Ozioma{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The room has everything I need, but a few more built-in storage
            options, like extra shelves or a larger wardrobe, would be very
            useful for organizing my belongings."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Halima Gambo{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The facilities are generally very good, but the laundry room gets
            quite busy during peak times. Adding a few more washing machines
            would make things much smoother."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Nneka Obianuju{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "Having a small convenience store or vending machines on-site would
            make life so much easier, especially for quick snacks or
            essentials."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Bashir Lawal{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The staff here are incredibly friendly and approachable. Any time
            I’ve had an issue, whether it’s a minor maintenance request or a
            question about the facilities, they’ve resolved it quickly and
            professionally."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Daniel Ikenna{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "It feels very safe here, with secure access and cameras in common
            areas, my properties are always untouched throughout my stay in the
            accommodation. I will come back for my HND."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Gambo Aliyu{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "The room itself is lovely, but I do wish there were a few more
            power outlets for charging all my devices. It can be a bit
            inconvenient to rely on extension cords all the time."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Mary Udeh{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
          <p>
            "The noise levels are surprisingly well-managed. Even during exam
            season, I’ve been able to focus on my studies without any
            disturbances from other residents."
          </p>
        </div>

        <div>
          <div className={ReviewStyles.reviewer_names}>
            Kolawole Temitope{" "}
            <div className={ReviewStyles.star_div}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p>
            "Overall, it’s a great place to live, though the kitchen could use
            more storage space, but the toilet is super clean and neat always"
          </p>
        </div>
      </section>

      {signUpModal && (
        <section className={LoginStyles.signUp_modal}>
          <div>
            <h3>Welcome to StudyLodge!</h3>
          </div>
          <div className={LoginStyles.modal_text}>
            Looking for perfect place to stay during your study ? You're in the
            right place.
          </div>
        </section>
      )}

      {signUpSpinner && (
        <section className={LoginStyles.spinner}>
          <div>Loading.....</div>{" "}
          <Vortex
            visible={true}
            height="50"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </section>
      )}
    </div>
  );
}

export default Reviews;
