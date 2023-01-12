import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import styles from "./subscribe.module.scss";
import SubForm from "./SubForm";

function Subscribe() {
  return (
    <section className="subscribe-section pt-lg pb-lg" id="subscribe">
      <div className="container section-x-margins">
        <Row className="justify-content-center">
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className="">
            <div className="subscribe">
              <h1 className={styles.subscribe__smTitle}>GET UPDATED ON US</h1>
              <h1 className={styles.subscribe__heading}>
                Subscribe for new letters
              </h1>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className="">
            <SubForm />
            <p className="font-sec" style={{ fonyFamily: "--font-family-sec" }}>
              Already Subscribed? <b className="text-primary">SIGN IN</b>
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Subscribe;
