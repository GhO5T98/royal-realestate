import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../Footer/Footer";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import Img from "../../assets/ouragents.jpg";
import "./agents.css";
const Agents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:5001/Agents")
        .then((res) => {
          console.log(res.data);
          setAgents(res.data);
        })
        .catch((err) => {
          console.log("No data " + err);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="agents__section">
        <div className="agents__hero">
          <img className="fluid" src={Img} alt="Our Agents" />
          <h1 className="our__agents">Our Agents</h1>
          <div class="overlay"></div>
        </div>
        <Container>
          <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            {agents.map((agent) => {
              return (
                <Col className="mb-3">
                  <Card key={agent._id} className="rounded-0 border-0 agents__card">
                    <Card.Img
                      variant="top rounded-0"
                      className="agent__card-img"
                      src={agent.image}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {agent.fullName}
                      </Card.Title>
                      <Card.Text className="text-muted">{agent.bio}</Card.Text>
                      <Row className="text-center">
                        <Col xs={4} lg={4}>
                          <Card.Text>
                            <OverlayTrigger
                              trigger="hover"
                              placement="top"
                              overlay={
                                <Popover id="popover-basic">
                                  <Popover.Header
                                    as="h3"
                                    className="text-center"
                                  >
                                    Phone Number{" "}
                                  </Popover.Header>

                                  <Popover.Body className="text-center">
                                    {agent.phone}
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button variant="dark" className="rounded-0">
                                <i class="bx bxs-phone-call"></i>
                              </Button>
                            </OverlayTrigger>
                          </Card.Text>
                        </Col>
                        <Col xs={4} lg={4}>
                          <Card.Text>
                            <OverlayTrigger
                              trigger="hover"
                              placement="top"
                              overlay={
                                <Popover id="popover-basic">
                                  <Popover.Header
                                    as="h3"
                                    className="text-center"
                                  >
                                    Email{" "}
                                  </Popover.Header>
                                  <Popover.Body className="text-center">
                                    {agent.email}
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button variant="dark" className="rounded-0">
                                <i class="bx  bx-envelope"></i>
                              </Button>
                            </OverlayTrigger>
                          </Card.Text>
                        </Col>
                        <Col xs={4} lg={4}>
                          <Card.Text>
                            <OverlayTrigger
                              trigger="hover"
                              placement="top"
                              overlay={
                                <Popover id="popover-basic">
                                  <Popover.Header
                                    as="h3"
                                    className="text-center"
                                  >
                                    Telegram Number{" "}
                                  </Popover.Header>
                                  <Popover.Body className="text-center">
                                    {agent.telegram}
                                  </Popover.Body>
                                </Popover>
                              }
                            >
                              <Button variant="dark" className="rounded-0">
                                <i class="bx bxl-telegram"></i>
                              </Button>
                            </OverlayTrigger>
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Agents;
