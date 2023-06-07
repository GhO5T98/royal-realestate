import React from "react";
import "../AboutUs/aboutus.css";
import { Container, Row, Col } from "react-bootstrap";
import Royal from "../../../assets/Royal.jpg";

const AboutUs = () => {
  return (
    <section className="about__section">
      <Container className="mt-5">
        <Row className="about__reverse__row">
          <Col sm={12} md={12}lg={6} className="mt-1">
            <img className="fluid" src={Royal} alt="" />
          </Col>
          <Col  sm={12} md={12} lg={6}>
            <h6 className="small__header">About Us</h6>
            <h1 className="big__header mb-4">Royal Group</h1>
            <p>
              Royal Group is reimagining real estate to make it easier to unlock
              life’s next chapter.As the most-visited real estate website in
              Albania, Royal offer customers an on-demand
              experience for selling, buying with transparency and nearly
              seamless end-to-end service.
            </p>

            <p>
              Our mission at Royal is to provide our clients with the most
              up-to-date  information about the real estate
              market. Our team of experts stays on top of the latest trends,
              data, and analysis in order to deliver accurate insights that can
              help our clients make informed decisions.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
