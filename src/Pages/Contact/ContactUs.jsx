import React, { useState, useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DefaultLayout from "./../../Layouts/DefaultLayout";
import css from "./Contact.module.scss";

import instagram from "./img/instagram.svg";
import twitter from "./img/tw.png";
import facebookicon from "./img/fb.png";
import youtube from "./img/youtube.svg";
import tiktok from "./img/tiktok.svg";
import spotify from "./img/spotify.svg";
import contatcus from "./img/Contactus.png";
import nameImg from "./img/contact-name.png";
import subjectImg from "./img/contact-subject.png";
import companyImg from "./img/contact-company.png";
import emailImg from "./img/contact-email.png";
import agreeImg from "./img/contact-agree.png";
import messageImg from "./img/conatct-message.png";

const SignupSchema = yup.object().shape({
  r_name: yup
    .string()
    .required("Name is required.")
    .min(3, "Name is too short - should be 8 chars minimum.")
    .max(50, "Name should be miximum 50 chars long."),
  r_company: yup
    .string()
    .required("Company is required.")
    .min(3, "Company is too short - should be 8 chars minimum.")
    .max(50, "Company should be miximum 50 chars long."),
  r_email: yup
    .string()
    .required("Email is required.")
    .email("Valid email is required.")
    .min(3, "Email is too short - should be 8 chars minimum.")
    .max(50, "Email should be miximum 50 chars long."),
  r_subject: yup
    .string()
    .required("Subject is required.")
    .min(3, "Subject is too short - should be 8 chars minimum.")
    .max(50, "Subject should be maximum 50 chars long."),
  r_message: yup
    .string()
    .required("Message is required.")
    .min(3, "Message is too short - should be 8 chars minimum.")
    .max(450, "Message should be miximum 450 chars long."),
  r_acceptterms: yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

function ContactUs() {
  const [socials] = React.useState([
    {
      text: "Instagram",
      link: "#",
      icon: instagram,
    },
    {
      text: "Twitter",
      link: "#",
      icon: twitter,
    },
    {
      text: "Facebook",
      link: "#",
      icon: facebookicon,
    },
    {
      text: "YouTube",
      link: "#",
      icon: youtube,
    },
    {
      text: "TikTok",
      link: "#",
      icon: tiktok,
    },
    {
      text: "Spotify",
      link: "#",
      icon: spotify,
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });

  const { name, email, subject, message, company } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    console.log(import.meta.env.REACT_APP_BACKEND_API_ROUTE);

    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` + "/contact-us",
        { name, email, subject, message, company },
        config
      )
      .then((res) => {
        toast.success("Form Submitted Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        window.scrollTo(0, 0);
      })
      .catch((err) => {
        toast.error(err, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        toast.error(err);
        window.scrollTo(0, 0);
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <DefaultLayout>
        <section className={css.section}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-24">
                <div className="contact-imgs-header ">
                  <img src={contatcus} alt="Contact Us" />
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div className={"w-100 " + css.card}>
                <form onSubmit={(e) => onSubmit(e)} id="contact-us-form">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-11 col-12">
                      <div className={css["control"]}>
                        <div className="contact-imgs-header ">
                          <img src={nameImg} alt="Contact Us" />
                        </div>
                        <input
                          className={css["control__input"]}
                          name="name"
                          type="text"
                          placeholder=""
                          onChange={(e) => onChange(e)}
                          value={name}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-11 col-12">
                      <div className={css.control}>
                        <div className="contact-imgs-header ">
                          <img src={companyImg} alt="Contact Us" />
                        </div>
                        <input
                          className={css["control__input"]}
                          name="company"
                          type="text"
                          placeholder=""
                          onChange={(e) => onChange(e)}
                          value={company}
                        />
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-11 col-12">
                      <div className={css.control}>
                        <div className="contact-imgs-header ">
                          <img src={emailImg} alt="Contact Us" />
                        </div>
                        <input
                          className={css["control__input"]}
                          name="email"
                          type="email"
                          placeholder="example@gmail.com"
                          onChange={(e) => onChange(e)}
                          value={email}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-11 col-12">
                      <div className={css.control}>
                        <div className="contact-imgs-header ">
                          <img src={subjectImg} alt="Subject" />
                        </div>
                        <input
                          className={css["control__input"]}
                          name="subject"
                          type="text"
                          placeholder=""
                          onChange={(e) => onChange(e)}
                          value={subject}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-24">
                      <div className={css.control}>
                        <div className="contact-imgs-header ">
                          <img src={messageImg} alt="Contact Us" />
                        </div>
                        <textarea
                          className={css["control__textarea"]}
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder=""
                          onChange={(e) => onChange(e)}
                          value={message}
                        />
                      </div>
                    </div>
                    <div className="col-md-24">
                      {/* {errors.r_acceptterms && (
                        <div className="d-flex mx-auto">
                          <p
                            className={
                              "d-inline-block w-auto mx-auto " +
                              css["controlMsg"]
                            }
                          >
                            {errors.r_acceptterms.message}
                          </p>
                        </div>
                      )} */}
                    </div>
                    <div className="col-md-24">
                      <div className={css["control__acceptterms"] + "  mt-3"}>
                        <input
                          className={css["control__checkbox"]}
                          type="checkbox"
                          id="r_acceptterms"
                          name="r_acceptterms"
                          value=""
                          // {...register("r_acceptterms")}
                          onChange={(e) => onChange(e)}
                        />
                        <label htmlFor="r_acceptterms"> I AGREE TO TERMS</label>
                      </div>
                    </div>
                    <div className="col-md-24">
                      <div className="d-flex justify-content-center">
                        <button
                          className={"btn btn-main mt-2 my-4 " + css["btn"]}
                          htmltype="submit"
                        >
                          SUBMIT
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={css["social"] + " text-center"}>
                    {socials?.map((social, index) => (
                      <a
                        href={social.link}
                        className={css["social__link"]}
                        key={index}
                        label={social.text}
                      >
                        <img
                          className={css["social__icon"]}
                          src={social.icon}
                          alt={social.text}
                        />
                      </a>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}

export default ContactUs;
