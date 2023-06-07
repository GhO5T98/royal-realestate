import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "./properties.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Property from "./Property/Property";
const Properties = () => {
  // Percaktim i aksesimit te update dhe delete
  const [loggedIn, setLoggedIn] = useState(false);
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    // per te percaktuar qe update dhe delete do te shfaqen kur user te jete i loguar
    const jwt = window.localStorage.getItem("token");

    if (jwt) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return (
    <>
      <section className="all__properties">
        <Container className="all__properties-search ">
          <Row>
            <h1 className="small__header">
              {" "}
              Search by Price, Location Or Type
            </h1>
            <Col xs={6} sm={7} md={7} lg={9}>
              <Form.Group controlId="formBasic">
                <Form.Control
                  className="rounded-0"
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Enter an address, city, type or price "
                />
              </Form.Group>
            </Col>

            <Col xs={6} sm={5} md={5} lg={3} className="text-end">
              {!loggedIn ? (
                <Link to={"/SignIn"}>
                  <Button className="rounded-0" variant="dark">
                    List A Property
                  </Button>
                </Link>
              ) : (
                <Link to={"/NewProperty"}>
                  <Button className="rounded-0" variant="dark">
                    List A Property
                  </Button>
                </Link>
              )}
            </Col>
          </Row>
        </Container>
        <Container className="all__properties-gallery">
          <h1 className="big__header">All Properties</h1>
          <Row xs={1} md={2} lg={3} className="g-4 mt-3">
            {properties
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.location.toLowerCase().includes(search) ||
                      item.price.toString().toLowerCase().includes(search) ||
                      item.type.toLowerCase().includes(search);
              })
              .map((item, id) => {
                return (
                  <Col key={id}>
                    <Property {...item} />
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

export default Properties;
