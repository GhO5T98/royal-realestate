import React, { useState, useEffect } from "react";
import "./pProperties.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Property from "../../Properties/Property/Property";

const PopularProperties = () => {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // therrirja e api
      await axios
        .get("https://royal-realestate.onrender.com/get_all")
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

  const sortedArr = properties.sort((a, b) => b.price - a.price);
  return (
    <section className="popular-p__section">
      <Container>
        <Row>
          <Col sm={9} md={10} lg={10}>
            <h6 className="small__header">Popular</h6>
            <h1 className="big__header">Our Popular Properties</h1>
          </Col>
          <Col className="mt-4" sm={3} md={2} lg={2}>
            <Link  id="explore__all" to={"/Properties"}>
              <h6>
                Explore All <i className="bx bxs-chevrons-right"></i>
              </h6>
            </Link>
          </Col>
        </Row>
        <Row xs={1} md={3} lg={3} className="g-4 mt-3">
          {sortedArr.slice(0, 3).map((item, index) => {
            return (
              <Col key={index}>
                <Property {...item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default PopularProperties;
