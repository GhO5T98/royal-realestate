import React from "react";
import { Col, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./property.css"

const Property = ({ _id, title, location, type, sqft, price, images }) => {
  return (
    <section className="property__">
      <Card className="rounded-0 border-0 property__card">
        <Card.Img variant="top rounded-0" className="card__img" src={images} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="ms-2 text-muted">
            <i className="bx bxs-map"></i>
            {location}
          </Card.Text>
          <Row className="text-center">
            <Col xs={4} lg={5}>
              <Card.Text>
                <i className="bx bx-home-alt"></i>
                {type}
              </Card.Text>
            </Col>
            <Col xs={4} lg={3}>
              <Card.Text>
                <i className="bx bx-area"></i>
                {sqft}m
              </Card.Text>
            </Col>
            <Col xs={4} lg={4}>
              <Card.Text>
                <i className="bx bx-purchase-tag"></i>
                {price}&#8364;
              </Card.Text>
            </Col>
          </Row>
          <Button variant="dark rounded-0 mt-3 ">
            <Link className='text-light text-decoration-none' to={`/Property/${_id}` }>See More</Link>
          </Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Property;
