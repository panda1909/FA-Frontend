import React, { useEffect, useState } from "react";

import DefaultLayout from "../../Layouts/DefaultLayout";
import css from "./Manifesto.module.scss";
import manifesto from "./img/Manifesto.png"
function Manifesto() {
  useEffect(() => {}, []);
  const [video, setVideo] = useState([])
  const [content, setContent] = useState([])

  useEffect(() => {
    fetch('{process.env.REACT_APP_BACKEND_API_ROUTE}/manifesto')
      .then((res) => res.json())
      .then((resJson) => {
        setVideo("{process.env.REACT_APP_BACKEND_API_ROUTE}"+resJson[0]['video'])
        setContent(resJson[0]['content'])
    })
  }, [])
  return (
    <>
      <DefaultLayout>
        <section className={css.section}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-24">
                <div className="page-header">
                <img src={manifesto} alt="Contact Us" />
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-xl-24 col-24">
                <div className="d-flex align-items-center justify-content-center">
                  <div className={"text-center " + css.card}>
                    <video className={css["video"]} autoPlay controls>
                      <source src={video} height="450" type="video/mp4" />
                      {/* <source src="movie.ogg" type="video/ogg" /> */}
                      Your browser does not support the video tag.
                    </video>
                    <br />
                    <br />
                    <p className="">
                      {content}
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}

export default Manifesto;
