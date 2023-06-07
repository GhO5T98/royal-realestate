import React, { useState, useEffect } from "react";
import "./userproperties.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import jwt_decode from "jwt-decode";
import axios from "axios";

const UserProperties = () => {
  const [payloadData, setPayloadData] = useState({});
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // therrirja e api
      await axios
        .get("http://localhost:5001/get_all")
        .then((res) => {
          // Shfaqja tek console i te dhenave
          // console.log(res.data)
          // Vendosja e te dhenave tek array
          setProperties(res.data);
        })
        .catch((err) => {
          console.log("Data not showing " + err);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    // per te percaktuar qe update dhe delete do te shfaqen kur user te jete i loguar
    const jwt = window.localStorage.getItem("token");

    if (jwt) {
      const decodedToken = jwt_decode(jwt);
      setPayloadData(decodedToken);
    }
  }, []);

  const userProfile = JSON.parse(JSON.stringify(payloadData));

  return (
    <section className="property__dashboard">
      <Container>
        <Row className="mb-5">
          <Col lg={2} className=" mt-5">
            <h1 id="user__fullname">
              <i className="bx bxs-user-account"></i>
              {userProfile.fullname}
            </h1>
          </Col>
        </Row>

        {properties.map((prop, index) => {
          return (
            <Row key={index} className="user__properties mt-2">
              <Col
                xs={3}
                sm={3}
                md={3}
                lg={3}
                className="user__properties-item"
              >
                <img src={prop.images} alt="" />
              </Col>
              <Col
                xs={3}
                sm={3}
                md={5}
                lg={5}
                className="user__properties-item"
              >
                <h1>{prop.title}</h1>
              </Col>

              <Col
                xs={3}
                sm={3}
                md={2}
                lg={2}
                className=" user__properties-item"
              >
                <Button id="property__edit">
                  Update <i className="bx bxs-edit"></i>
                </Button>
              </Col>
              <Col
                xs={3}
                sm={3}
                md={2}
                lg={2}
                className=" user__properties-item"
              >
                <Button variant="danger" id="property__delete">
                  Delete <i className="bx bxs-trash"></i>
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
    </section>
  );
};

export default UserProperties;
