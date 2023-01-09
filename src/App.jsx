import {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";

import logo from "./assets/logo.png";
import modalImg from "./assets/modal.png";
import "./Styles/style.scss";
import "./App.scss";
import RouterPages from "./RouterPages";


function App() {
    const [logos, setlogos] = useState([])
    const [link_to, setlink_to] = useState([])
    
    useEffect(() => {
        fetch('http://127.0.0.1:8002/pop-up')
            .then((res) => res.json())
            .then((resJson) => {
                setlogos(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` + resJson['image'])
                setlink_to(resJson['link'])
            })
    }, [])
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="App">
            <RouterPages/>

            <button className="btn-modal" onClick={handleShow}>
                <img src={logo} alt="" className="logo"/>
            </button>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Body className="position-relative p-0">

                    <a href={link_to} target="_blank">
                        <img src={logos} alt="" className="modal-img"/>
                    </a>
                    <button className="btn-close position-absolute" onClick={handleClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-x-lg"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </button>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default App;
