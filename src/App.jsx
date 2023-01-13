import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import logo from "./assets/logo.png";
import RouterPages from "./RouterPages";
import "./Styles/style.scss";

function isBlank(link_to, image, is_blank) {
  if (is_blank) {
    return (
      <a href={link_to} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="" className="modal-img" />
      </a>
    );
  } else {
    return (
      <a href={link_to}>
        <img src={image} alt="" className="modal-img" />
      </a>
    );
  }
}

function App() {
  const [image, setimage] = useState([]);
  const [link_to, setlink_to] = useState([]);
  const [is_blank, setblank] = useState([]);

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [offset, setOffset] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // window.onscroll = () => {
  //   setIsScrolling(true);
  //   document.body.classList.remove("noscrolling");
  //   document.body.classList.add("scrolling");
  //   scrollend();
  // };

  // function scrollend() {
  //   setTimeout(() => {
  //     // if (isScrolling) {}
  //     setIsScrolling(false);
  //     document.body.classList.remove("scrolling");
  //     document.body.classList.add("noscrolling");
  //     // console.log("Someone scrolled me!");
  //   }, 750);
  // }

  useEffect(() => {
    // const onScroll = () => setOffset(window.pageYOffset);
    // // clean up code
    // window.removeEventListener("scroll", onScroll);
    // window.addEventListener("scroll", onScroll, { passive: true });
    // return () => window.removeEventListener("scroll", onScroll);

    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` + "/pop-up")
      .then((res) => res.json())
      .then((resJson) => {
        setimage(
          `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` +
            resJson["pop_up"].image
        );

        setTimeout(() => {
          setShow(true);
        }, 150);
        console.log("exists " + resJson["exists"]);
        console.log("image " + resJson["image"]);
        console.log("pop_up " + resJson["pop_up"].image);
        console.log("imageimage " + image);
        setlink_to(resJson["link"]);
        setblank(resJson["blank"]);
      });
  }, []);
  console.log(isScrolling);

  return (
    <div className="App">
      <RouterPages />

      {show ? (
        <button className="btn-modal" onClick={handleShow}>
          <img src={logo} alt="" className="logo" />
        </button>
      ) : null}

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Body className="position-relative p-0">
          {isBlank(link_to, image, is_blank)}

          <button className="btn-close position-absolute" onClick={handleClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </button>
        </Modal.Body>
      </Modal>
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
    </div>
  );
}

export default App;
