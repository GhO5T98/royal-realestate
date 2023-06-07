import React from "react";
import "../Hero/hero.css";
import { Button, Carousel, Form, Row, Container, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { carouselData } from "./CarouselData";
import { useNavigate, Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/Properties");
  };
  return (
    <section className="hero__section">
      <Carousel indicators={false} controls={false} fade={true}>
        {carouselData.map((data, id) => {
          return (
            <Carousel.Item key={id}>
              <img
                className="d-block w-100"
                src={data.carouselImg}
                alt={data.carouselDes}
              />
              <Carousel.Caption>
                <Container className="hero__text">
                  <Row>
                    <Col lg={12}>
                      <h1 id="hero__header">
                        Find Real Estate That Suits You.
                      </h1>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={12}>
                      <Link to={"/SignIn"}>
                        <Button variant="dark" className="hero__btn mt-3">
                          Get Started
                        </Button>
                      </Link>
                    </Col>
                  </Row>

                  <Row className="mt-5 stats">
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <h1 className="big__header">
                        <CountUp start={0} end={1200} duration={4} delay={0} />
                        <i className="bx bx-plus"></i>
                      </h1>
                      <p className="hero-small__header"> Solded Properies</p>
                    </Col>

                    <Col xs={4} sm={4} md={4} lg={4}>
                      <h1 className="big__header">
                        <CountUp start={0} end={4500} duration={4} delay={0} />
                        <i className="bx bx-plus"></i>
                      </h1>
                      <p className="hero-small__header">Happy Clients</p>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={4}>
                      <h1 className="big__header">
                        <CountUp start={0} end={240} duration={4} delay={0} />
                        <i className="bx bx-plus"></i>
                      </h1>
                      <p className="hero-small__header">Agents</p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Container className="hero__search">
        <Row>
          <h1 className="small__header">Find it. Tour it. Own it.</h1>
        </Row>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={8} sm={8} md={8} lg={9}>
              <Form.Group controlId="formBasic">
                <Form.Control
                  className="rounded-0 shadow-none"
                  type="text"
                  placeholder="Enter an address, city, type or price "
                />
              </Form.Group>
            </Col>
            <Col xs={4} sm={4} md={4} lg={3} className="text-end">
              <Button variant="dark" type="submit" className="rounded-0">
                Search <i className="bx bx-search-alt-2"></i>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  );
};

export default Hero;
