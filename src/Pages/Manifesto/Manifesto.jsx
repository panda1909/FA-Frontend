import { DefaultPlayer as Video } from "react-html5video";
import React, { useEffect, useState } from "react";
import "react-html5video/dist/styles.css";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import DefaultLayout from "../../Layouts/DefaultLayout";
import manifesto from "./img/Manifesto.png";
import css from "./Manifesto.module.scss";
import VideoHtml from "./VideoHtml";

function Manifesto() {
  useEffect(() => {}, []);
  // const [video, setVideo] = useState('http://985f-2400-adc5-104-7c00-5f20-eee3-5fe8-5c41.ngrok.io/media/manifesto/20221221_174218.mp4');
  const [video, setVideo] = useState(null);
  const [content, setContent] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(video);
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}/manifesto`)
      .then((res) => res.json())
      .then((resJson) => {
        console.log("false");
        setVideo(
          `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` +
            resJson[0]["video"]
        );
        setLoadingData(false);
        setContent(resJson[0]["content"]);
      })
      .catch((error) => {
        setLoadingData(false);
        setError(true);
        // console.error("There was an error!", error);
      });
  }, [video]);

  if (loadingData) {
    return (
      <>
        <DefaultLayout>
          <section className={css.section}>
            <div className="container">
              <PageHeader />

              <div className="text-center">
                <h5>Loading Data</h5>
                <div className="d-flex justify-content-center">
                  <Spinner variant="secondary" animation="border" size="lg" />
                </div>
              </div>
            </div>
          </section>
        </DefaultLayout>
      </>
    );
  }
  if (error) {
    return (
      <>
        <DefaultLayout>
          <section className={css.section}>
            <div className="container">
              <PageHeader />

              <br />
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
            </div>
          </section>
        </DefaultLayout>
      </>
    );
  }

  return (
    <>
      <DefaultLayout>
        <section className={css.section}>
          <div className="container">
            <PageHeader />

            <div className="row align-items-center">
              <div className="col-xl-24 col-24">
                <div className="d-flex align-items-center justify-content-center">
                  <div className={"text-center " + css.card}>
                    {video != null ? <VideoHtml src={video} /> : null}

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

function PageHeader() {
  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-24">
          <div className="page-header">
            <img src={manifesto} alt="Contact Us" />
          </div>
        </div>
      </div>
    </>
  );
}
