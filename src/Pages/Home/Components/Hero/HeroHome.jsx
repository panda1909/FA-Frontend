import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import logo from "./logo.png";
import css from "./HeroHome.module.scss";
import React from "react";

function isBlank(link, name, is_blank) {
  if (is_blank) {
    return (
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className={css["hero__btn"] + " mt-4"}>{name}</button>
        </a>
      </div>
    );
  } else {
    return (
      <div>
        <a href={link}>
          <button className={css["hero__btn"] + " mt-4"}>{name}</button>
        </a>
      </div>
    );
  }
}

function HeroHome() {
  const [btns, setBtns] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}`)
      .then((res) => res.json())
      .then((resJson) => {
        setLoadingData(false);
        let data = [];
        for (let i = 0; i < resJson.length; i++) {
          data.push({
            id: resJson[i]["id"],
            name: resJson[i]["name"],
            link: resJson[i]["link"],
            blank: resJson[i]["blank"],
          });
        }
        setBtns(data);
      })
      .catch((error) => {
        setLoadingData(false);
        setError(true);
        // console.error("There was an error!", error);
      });
  }, []);

  return (
    <section className="hero-section position-relative" id="home">
      <div className="container section-x-margins">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-24 col-24">
            <div className="text-center">
              <img src={logo} alt="" className={css["hero__logo"]} />
              <br />
              <br />
              <p className={css["hero__description"]}>
                A boundless space in the Multiverse, Home to At Design and
                Entertainment.
              </p>
              <br />
              <br />
              {error && (
                <Alert
                  className="alert alert-danger text-center"
                  variant="danger"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    class="me-2 bi bi-exclamation-octagon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                  </svg>{" "}
                  Error getting data
                </Alert>
              )}
              {loadingData && (
                <div className="text-center">
                  <h5>Loading Data</h5>
                  <div className="d-flex justify-content-center">
                    <Spinner variant="secondary" animation="border" size="lg" />
                  </div>
                </div>
              )}
              {React.Children.toArray(
                btns.map((btn) => isBlank(btn.link, btn.name, btn.blank))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
