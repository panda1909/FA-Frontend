import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import "./Styles/style.scss";
import "./App.scss";
import { gsap } from "gsap";
import RouterPages from "./RouterPages";
import logo from "./assets/logo.png";

function isBlank(link_to, image, is_blank) {
  console.log(link_to, '----T')
  if (is_blank) {
    return (
      <a className='d-block w-100' href={link_to} target='_blank' rel='noopener noreferrer'>
        <img style={{ width: "70vw", objectFit: "contain",}} src={image} alt='' className='modal-img' />
      </a>
    );
  } else {
    return (
      <a className='d-block w-100' href={link_to}>
        <img
          style={{
            width: "70vw",
            objectFit: "contain",
          }}
          src={image}
          alt=''
          className='modal-img'
        />
      </a>
    );
  }
}

function App() {
  const [image, setimage] = useState([]);
  const [link_to, setlink_to] = useState([]);
  const [is_blank, setblank] = useState([]);
  const btnRef = useRef();
  const modelRef = useRef();
  const closeBtnRef = useRef();
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [hasPopup, setHasPopup] = useState(false);
  const avoidScroll = () => {
    window.scrollTo(0, 0);
  };
  const handleClose = () => {
    modelRef.current.style.display = "none";
    document.body.style.overflow = "auto";
  };
  const handleShow = () => {
    modelRef.current.style.display = "flex";
    document.body.style.overflow = "hidden";
  };
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
            resJson["pop_up"]?.image
        );
        console.log(resJson, '----A')
        setlink_to(resJson["pop_up"]?.link);
        setblank(resJson["pop_up"]?.blank);
        // setTimeout(() => {
        if (resJson["pop_up"]?.image == undefined) {
          if (btnRef.current) btnRef.current.style.display = "none";
          if (modelRef.current) modelRef.current.style.display = "none";
          if (closeBtnRef.current) closeBtnRef.current.style.opacity = 0;
          document.body.style.overflow = "auto";

          // setHasPopup(false);
          // setShow(false);
        } else {
          btnRef.current.style.display = "block";
          modelRef.current.style.display = "flex";
          closeBtnRef.current.style.opacity = 1;
          document.body.style.overflow = "hidden";
        }
        // }, 150);
      });
  }, [image]);

  return (
    <div className='App'>
      <RouterPages />

      <button
        ref={btnRef}
        style={{
          display: "none",
        }}
        className='btn-modal'
        onClick={handleShow}
      >
        <img src={logo} alt='' className='logo' />
      </button>

      {/* <Modal show={show} onHide={handleClose} size='lg' centered>
        <Modal.Body className='position-relative p-0'>
          {isBlank(link_to, image, is_blank)}

          <button className='btn-close position-absolute' onClick={handleClose}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-x-lg'
              viewBox='0 0 16 16'
            >
              <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
            </svg>
          </button>
        </Modal.Body>
      </Modal> */}
      <div
        className=' p-0'
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        ref={modelRef}
      >
      
        <div style={{ position: "relative" }}>
          {isBlank(link_to, image, is_blank)}

          <button
            ref={closeBtnRef}
            className='btn-close position-absolute'
            onClick={handleClose}
            style={{ opacity: 0 }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-x-lg'
              viewBox='0 0 16 16'
            >
              <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
            </svg>
          </button>
        </div>
      </div>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <ToastContainer />
    </div>
  );
}

export default App;
