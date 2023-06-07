import React, { useState, useEffect } from "react";
import "./propertydetails.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../Footer/Footer";
import Img from "../../../assets/img2.jpg";
const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //Get Property//
  const [property, setProperty] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const jwt = window.localStorage.getItem("token");

      if (jwt) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
      // therritja e apit
      await axios
        .get(`http://localhost:5001/getPropertyDetail/${id}`)
        .then((res) => {
          setProperty(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
          setLocation(res.data.location);
          setType(res.data.type);
          setSqft(res.data.sqft);
          setPrice(res.data.price);
          setBedrooms(res.data.bedrooms);
          setBathrooms(res.data.bathrooms);
          setByear(res.data.b_year);
          setOwnerNr(res.data.ownerNr);
          setSelectedFile(res.data.images);
        })
        .catch((err) => {
          console.log("Data not showing " + err);
        });
    };
    fetchData();
  }, [id]);
  //Update Property//
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [sqft, setSqft] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [b_year, setByear] = useState("");
  const [ownerNr, setOwnerNr] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  //Image Update//
  const getBase64 = (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  const onFileChange = (event) => {
    let file = event.target.files[0];
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setSelectedFile(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = async (id) => {
    // marrja e informacioneve te reja
    const propertyUpdate = {
      title: title,
      desc: desc,
      location: location,
      type: type,
      sqft: sqft,
      price: price,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      b_year: b_year,
      ownerNr: ownerNr,
      images: selectedFile,
    };
    // therritja e apit
    await axios
      .patch(`http://localhost:5001/updateProperty/${id}`, propertyUpdate)
      .then(() => {
        navigate(`/Property/${id}`);
        setUpdateMode(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Update End//

  //Delete//
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5001/delete/${id}`)
      .then((res) => {
        navigate("/Properties");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Delete End//

  return (
    <>
      {updateMode ? (
        <section className="property__list-section">
          <div className="property__hero">
            <img className="fluid" src={Img} alt="List Your Property" />
            <h1 className="list__property">Update Your Property</h1>
            <div className="overlay"></div>
          </div>
          <Container>
            <Row>
              <h6 className="mb-5">
                *Complete the form with your property details.
              </h6>
            </Row>
            <Row>
              <Form>
                <Row>
                  <Col lg={5}>
                    <Form.Group className="mb-4" controlId="Property Title">
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Property Title"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="Property Desc">
                      <Form.Label id="property__desc-label">
                        Property Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="PropertyLocation">
                      <Form.Label>
                        Location <i className="bx bxs-map"></i>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter Property Location"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className="mb-4" controlId="YearofBuild">
                      <Form.Label>
                        Year Of Build <i className="bx bx-calendar"></i>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        value={b_year}
                        onChange={(e) => setByear(e.target.value)}
                        placeholder="Enter Year of Build"
                      />
                    </Form.Group>

                    <Form.Group controlId="formFileMultiple" className="mb-4">
                      <Form.Label>
                        Images <i className="bx bx-image-add"></i>
                      </Form.Label>
                      <Form.Control
                        type="file"
                        multiple
                        accept=".jpeg, .png, .jpg"
                        onChange={onFileChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="OwnerContact">
                      <Form.Label>
                        Owner Contact<i className="bx bxs-phone"></i>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        value={ownerNr}
                        onChange={(e) => setOwnerNr(e.target.value)}
                        placeholder="Enter Phone Number "
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="Bedrooms">
                      <Form.Label>
                        Bedrooms <i className="bx bxs-bed"></i>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        placeholder="Enter Nr Of Bedrooms"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={3}>
                    <Form.Group className="mb-4" controlId="PropertyPrice">
                      <Form.Label>
                        Price<i className="bx bx-euro"></i>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Price"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="PropertyType">
                      <Form.Label>
                        Property Type <i className="bx bx-home"></i>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        placeholder="Enter Property Type"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="PropertyArea">
                      <Form.Label>
                        Sqft<i className="bx bx-area"></i>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        value={sqft}
                        onChange={(e) => setSqft(e.target.value)}
                        placeholder="Property Area (m2)"
                      />
                    </Form.Group>
                    <Form.Group className="mb-4" controlId="Bathrooms">
                      <Form.Label>
                        Bathrooms <i className="bx bx-bath"></i>
                      </Form.Label>
                      <Form.Control
                        type="number"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                        placeholder="Enter Nr Of Bathrooms"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="text-center mt-4">
                  <Col>
                    <Button
                      variant="dark rounded-0"
                      type="submit"
                      onClick={() => handleUpdate(property._id)}
                    >
                      Update Property
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
            {/* {selectedFile && selectedFile !== "" && (
              <img className="img-fluid" src={selectedFile} alt="" />
            )} */}
          </Container>
        </section>
      ) : (
        <section className="property__details">
          <Container className="property__details-big">
            <Container className="property__head-container">
              <Row className="mb-5">
                <h2 className="small__header">Property Details</h2>
              </Row>
              <Row className="property__details-head">
                <Col sx={12} sm={12} md={8} lg={9}>
                  <h1 className="big__header">{property.title}</h1>
                  <h6>
                    {" "}
                    <i className="bx bx-map"></i>
                    {property.location}
                  </h6>
                </Col>
                <Col id="price__" xs={12} sm={12} md={4} lg={3}>
                  <h3>
                    {property.price}
                    <i className="bx bx-euro"></i>
                  </h3>
                </Col>
              </Row>
              <Row className="mt-5 ">
                <Col lg={12}>
                  <img
                    className="fluid"
                    src={property.images}
                    alt={property.title}
                  />
                </Col>
              </Row>
            </Container>
            <Container className="specs__container">
              <Row>
                <Col>
                  {" "}
                  <h1 className="big__header">Overview</h1>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col xs={6} sm={6} md={4} className="mb-3">
                  <h1>
                    <i className="bx bx-home">{property.type}</i>
                  </h1>
                  <p>Property Type</p>
                </Col>
                <Col xs={6} sm={6} md={4} className="mb-3">
                  <h1>
                    <i className="bx bx-area">{property.sqft} </i>
                  </h1>
                  <p>Sq Ft</p>
                </Col>
                <Col xs={6} sm={6} md={4} className="mb-3">
                  <h1>
                    <i className="bx bx-bed">{property.bedrooms} </i>
                  </h1>
                  <p>Bedrooms</p>
                </Col>
                <Col xs={6} sm={6} md={4} className="mb-3">
                  <h1>
                    <i className="bx bx-bath">{property.bathrooms} </i>
                  </h1>
                  <p>Bathrooms</p>
                </Col>
                <Col xs={6} sm={6} md={4} className="mb-3">
                  <h1>
                    <i className="bx bx-calendar">{property.b_year} </i>
                  </h1>
                  <p>Year Of Build</p>
                </Col>
                <Col xs={6} sm={6} md={4} className="mb-3">
                  <h1>
                    <i className="bx bx-phone">355{property.ownerNr} </i>
                  </h1>
                  <p>Owner Contact</p>
                </Col>
              </Row>
            </Container>
            <Container className="desc__container">
              <Row>
                <Col>
                  {" "}
                  <h1 className="big__header">Description</h1>
                  <hr />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>{property.desc}</p>
                </Col>
              </Row>
            </Container>

            {!loggedIn ? (
              <></>
            ) : (
              <Container className="desc__container">
                <Row className="text-center">
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <Button
                      id="property__edit"
                      onClick={() => setUpdateMode(true)}
                    >
                      Update <i className="bx bxs-edit"></i>
                    </Button>
                  </Col>
                  <Col xs={6} sm={6} md={6} lg={6}>
                    <Button
                      variant="danger"
                      id="property__delete"
                      onClick={() => handleDelete(property._id)}
                    >
                      Delete <i className="bx bxs-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </Container>
            )}
          </Container>
          <Footer />
        </section>
      )}
    </>
  );
};

export default PropertyDetails;
