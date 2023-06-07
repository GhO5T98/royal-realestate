import React from "react";
import "./footer.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Termsofuse from "./Termsofuse";
import Privacysettings from "./Privacysettings";
import Disclaimer from "./Disclaimer";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center mb-3">
          <i className="bx bx-crown"></i>
          <h1 id="footer__logo">ROYAL</h1>
        </Row>
        <Row>
          <Col sm={12} md={12} lg={4} id="footer__text">
            <p>
              At Royal, our mission is to provide an unparalleled real estate
              experience that sets us apart from the competition. We believe
              that buying or selling a home should be an exciting and rewarding
              journey, and we're committed to making that happen for every one
              of our clients.
            </p>
          </Col>
          <Col sm={12} md={12} lg={3} id="footer__policy">
            <Termsofuse />

            <Privacysettings />

            <Disclaimer />
          </Col>

          <Col sm={12} md={12} lg={4} id="footer__sub">
            <h2>Subscribe To Our Newsletters !</h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="shadow-none"
                />
              </Form.Group>

              <i className="bx bxl-telegram"></i>
            </Form>
            <div className="social__media">
              <i className="bx bxl-instagram"></i>
              <i className="bx bxl-linkedin-square"></i>
              <i className="bx bxl-facebook-square"></i>
              <i className="bx bxl-twitter"></i>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; RH-2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
