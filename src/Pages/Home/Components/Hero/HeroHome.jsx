import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import logo from "./logo.png";
import css from "./HeroHome.module.scss";
import React from 'react';

function isBlank(link, name, is_blank){

  if(is_blank){
      return (
        <div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className={css["hero__btn"] + " mt-4"}>
                {name}
            </button>
          </a>
        </div>
      )
  }else{
      return (
        <div>
          <a href={link}>
          <button className={css["hero__btn"] + " mt-4"}>
              {name}
          </button>
          </a>
        </div>
      )
  }
}

function HeroHome() {
    const [btns, setBtns] = useState([])
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}`)
          .then((res) => res.json())
          .then((resJson) => {
            let data = []
            for (let i = 0; i < resJson.length; i++) {
                data.push({
                    id: resJson[i]['id'],
                    name: resJson[i]['name'],
                    link: resJson[i]['link'],
                    blank: resJson[i]['blank'],
                })
            }
            setBtns(data)
          })
    }, [])

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
              {React.Children.toArray(
                btns.map(( btn ) => 
                  isBlank(btn.link, btn.name, btn.blank)
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
