import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import logo from "./logo.png";
import css from "./HeroHome.module.scss";

function HeroHome() {
  useEffect(() => {
    // alert(theme);
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
              <div>
                <button className={css["hero__btn"] + " "}>
                  Download for iOS for Android
                </button>
              </div>
              <div>
                <button className={css["hero__btn"] + " mt-4"}>
                  Download for Android{" "}
                </button>
              </div>
              <div>
                <button className={css["hero__btn"] + " mt-4"}>
                  Download for Windows / Desktop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
