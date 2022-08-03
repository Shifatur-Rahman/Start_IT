import Button from "react-bootstrap/Button";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <Container fluid="true" className="topFixedBanner">
        <div className="topNavbarOverlay">
          <Container className="topContent">
            <Row>
              <Col>
                <h1
                  className="topTitle"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  Why Wait? Start It right Now!
                </h1>
                <h4
                  className="topSubTitle"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Dropshipping is a great way to test product-market fit and
                  launch a business.{" "}
                </h4>
                <Button
                  className="topBtn1"
                  variant="info"
                  size="lg"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  CHECK IT OUT
                </Button>
                <Button
                  className="topBtn1"
                  variant="outline-info"
                  size="lg"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                >
                  BUY THE THEME
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Slider;
