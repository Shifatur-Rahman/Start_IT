import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiBookmark2Line } from "react-icons/ri";
// import { IoLogoHtml5 } from "react-icons/si";
import { TbMessageDots } from "react-icons/tb";
import { IoLogoWindows, IoLogoHtml5 } from "react-icons/io";

import "./Services.css";

const Services = () => {
  return (
    <>
      {/* RiBookmark2Line */}
      <Container className="text-center">
        <h1 className="serviceTitle">OUR SERVICES</h1>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
              <RiBookmark2Line className="reactIcon" />
              <h2 className="serviceSubTitle">Pixel-Perfect Design</h2>
              <p className="servicePara">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
              <TbMessageDots className="reactIcon" />
              <h2 className="serviceSubTitle">Free Plugins Included</h2>
              <p className="servicePara">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
              <IoLogoHtml5 className="reactIcon" />
              <h2 className="serviceSubTitle">Pixel-Perfect Design</h2>
              <p className="servicePara">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="serviceCard text-center">
              <IoLogoWindows className="reactIcon" />
              <h2 className="serviceSubTitle">Extensive Documentation</h2>
              <p className="servicePara">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
