import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

// import { socials } from "./SocialData";
import DefaultLayout from "./../../Layouts/DefaultLayout";
import css from "./Contact.module.scss";

import instagram from "./img/instagram.svg";
import twitter from "./img/tw.png";
import facebookicon from "./img/fb.png";
import youtube from "./img/youtube.svg";
import tiktok from "./img/tiktok.svg";
import spotify from "./img/spotify.svg";

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
    .max(50, "Subject should be miximum 50 chars long."),
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
  const [submitting, isSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      r_name: "",
      r_email: "",
      r_subject: "",
      r_message: "",
      r_company: "",
    },
  });

  React.useEffect(() => {
    reset();
  }, [reset]);

  const onSubmit = (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    isSubmitting(true);
    axios
      .post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` + "/contact-us",
        {
          name: data.r_name,
          email: data.r_email,
          subject: data.r_subject,
          message: data.r_message,
          company: data.r_company,
        },
        config
      )
      .then((res) => {
        reset();
        isSubmitting(false);
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
      <DefaultLayout>
        <section className={css.section}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-24">
                <div className="page-header">
                  <h1 className="page-title">CONTACT US</h1>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-center">
              <div className={"w-100 " + css.card}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-sm-11 col-12">
                      <div className={css["control"]}>
                        <label
                          className={css["control__label"]}
                          htmlFor="r_name"
                        >
                          NAME
                        </label>
                        <input
                          className={css["control__input"]}
                          {...register("r_name")}
                          type="text"
                          placeholder=" "
                          id="r_name"
                        />
                        {errors.r_name && (
                          <p className={css.controlMsg}>
                            {errors.r_name.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-11 col-12">
                      <div className={css.control}>
                        <label
                          className={css["control__label"]}
                          htmlFor="r_company"
                        >
                          COMPANY
                        </label>
                        <input
                          className={css["control__input"]}
                          {...register("r_company")}
                          type="text"
                          placeholder=" "
                          id="r_company"
                        />
                        {errors.r_company && (
                          <p className={css.controlMsg}>
                            {errors.r_company.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-11 col-12">
                      <div className={css.control}>
                        <label
                          className={css["control__label"]}
                          htmlFor="r_email"
                        >
                          EMAIL*
                        </label>
                        <input
                          className={css["control__input"]}
                          {...register("r_email")}
                          type="email"
                          placeholder=" "
                          id="r_email"
                        />
                        {errors.r_email && (
                          <p className={css.controlMsg}>
                            {errors.r_email.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-10 col-sm-11 col-12">
                      <div className={css.control}>
                        <label
                          className={css["control__label"]}
                          htmlFor="r_subject"
                        >
                          SUBJECT
                        </label>
                        <input
                          className={css["control__input"]}
                          {...register("r_subject")}
                          type="text"
                          placeholder=" "
                          id="r_subject"
                        />
                        {errors.r_subject && (
                          <p className={css.controlMsg}>
                            {errors.r_subject.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-24">
                      <div className={css.control}>
                        <label
                          className={css["control__label"]}
                          htmlFor="r_message"
                        >
                          MESSAGE
                        </label>
                        <textarea
                          className={css["control__textarea"]}
                          {...register("r_message")}
                          type="text"
                          placeholder=" "
                          id="r_message"
                          // rows="4"
                          // columns="5"
                        />
                        {errors.r_message && (
                          <p className={css.controlMsg}>
                            {errors.r_message.message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-md-24">
                      <div className={css["control__acceptterms"]}>
                        <input
                          className={css["control__checkbox"]}
                          type="checkbox"
                          id="r_acceptterms"
                          value=""
                          {...register("r_acceptterms")}
                        />
                        <label htmlFor="r_acceptterms"> I AGREE TO TERMS</label>
                      </div>
                      {errors.r_acceptterms && (
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
                      )}
                    </div>
                    <div className="col-md-24">
                      <div className="d-flex mx-auto justify-content-center">
                        <button
                          type="button"
                          // type="submit"
                          onClick={handleSubmit(onSubmit)}
                          className={"btn btn-main my-4 " + css["btn"]}
                        >
                          {submitting == true ? " SUBMITTING..." : " SUBMIT "}
                        </button>
                        {/* <button
                          type="button"
                          // type="submit"
                          onClick={() => reset()}
                          className={"btn btn-main my-4 " + css["btn"]}
                        >
                          reset
                        </button> */}
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
