import { DefaultPlayer as Video } from "react-html5video";
import React, { useEffect, useState } from "react";
import "react-html5video/dist/styles.css";

import DefaultLayout from "../../Layouts/DefaultLayout";
import manifesto from "./img/Manifesto.png";
import css from "./Manifesto.module.scss";
import VideoHtml from "./VideoHtml";

function Manifesto() {
  useEffect(() => {}, []);
  // const [video, setVideo] = useState('http://985f-2400-adc5-104-7c00-5f20-eee3-5fe8-5c41.ngrok.io/media/manifesto/20221221_174218.mp4');
  const [video, setVideo] = useState(null);
  const [content, setContent] = useState([]);

  useEffect(() => {
    console.log(video);
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}/manifesto`)
      .then((res) => res.json())
      .then((resJson) => {
        setVideo(
          `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` +
            resJson[0]["video"]
        );
        setContent(resJson[0]["content"]);
        console.log(video);
        // console.log(content);
      });
  }, [video]);

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
                    {video != null ? <VideoHtml src={video} /> : null}
                    {/* <Video
                      // autoPlay
                      loop
                      muted
                      controls={[
                        "PlayPause",
                        "Seek",
                        "Time",
                        "Volume",
                        "Fullscreen",
                      ]}
                      // poster="http://sourceposter.jpg"
                      onCanPlayThrough={() => {
                        // Do stuff
                      }}
                    >
                      <source src={video} type="video/mp4" />
                    </Video>
                    <video className={css["video"]} autoPlay controls>
                      <source src={video} height="450" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video> */}
                    <br />
                    <br />
                    <p className="">{content}</p>
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
