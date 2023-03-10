import React, { useEffect, useState } from "react";
import NavItems from "../../Components/WebGl/Index";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

export default function Landing() {
  const [items, setItems] = useState([]);
  const masionRef = React.useRef(null);
  const fineArtsRef = React.useRef(null);
  let timeout;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [items]);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      //css to hide buttons using gsap
      gsap.to(masionRef.current, { opacity: 0, duration: 0.1 });
      gsap.to(fineArtsRef.current, { opacity: 0, duration: 0.1 });

      clearTimeout(timeout);

      timeout = setTimeout(function () {
        //css to show buttons
        gsap.to(masionRef.current, { opacity: 1, duration: 0.35 });
        gsap.to(fineArtsRef.current, { opacity: 1, duration: 0.35 });
      }, 450);
    });
  });

  // timeout = setTimeout(function () {

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}/menu-items`)
      .then((res) => res.json())
      .then((resJson) => {
        let data = [];
        let j = 96;
        for (let i = 0; i < resJson.length; i++) {
          j = j + 1;
          if (i == 0) {
            data.push({
              title: "Contact Us",
              src:
                `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` +
                resJson[i]["image"],
              position: [0, 0, 0],
              trigger: "." + String.fromCharCode(j),
              direction: "center",
              link: resJson[i]["link"],
            });
          } else {
            data.push({
              title: "Contact Us",
              src:
                `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` +
                resJson[i]["image"],
              position: [0, 0, -30],
              trigger: "." + String.fromCharCode(j),
              direction: "center",
              link: resJson[i]["link"],
            });
          }
        }
        setItems(data);
      });
  }, []);

  return (
    <div data-scroll-container style={{ position: "relative" }}>
      <NavItems />

      <Link to='/fine-arts' className='btn btn-link btn-1' ref={fineArtsRef}>
        FINE ARTS
      </Link>
      <Link to='/maison' className='btn btn-link btn-2' ref={masionRef}>
        MAISON
      </Link>

      {items.map((item, index) => {
        return (
          <section
            key={index}
            style={{ height: item.first ? "10vh" : "50vh" }}
            className={item.trigger.substring(1)}
            data-scroll-section
          ></section>
        );
      })}
      <section data-scroll-section style={{ height: "100vh" }}></section>
    </div>
  );
}
