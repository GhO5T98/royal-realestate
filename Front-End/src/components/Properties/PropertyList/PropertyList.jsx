import React, { useState } from "react";
import "./propertylist.css";
import Footer from "../../Footer/Footer";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Img from "../../../assets/img2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PropertyList = () => {
  const navigate = useNavigate();
  
  // Cdo input ka nje state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [sqft, setSqft] = useState("");
  const [price, setPrice] = useState("");
  const [ownerNr, setOwnerNr] = useState("");
  const [selectedFile, setSelectedFile] = useState([]);
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [b_year, setByear] = useState("");
  // konfigurime per te upload-uar imazhet
  // file e marre nga input e kthen ne nje string
  const getBase64 = (file) => {
    // object i JS qe perfaqeson nje element-vlere qe ende nuk eshte krijuar
    // dy parametra resolve ose reject
    return new Promise((resolve) => {
      let baseURL = "";
      // lexon filin e marre nga input
      let reader = new FileReader();

      // konverton file ne string
      reader.readAsDataURL(file);

      // Ne lodim / ne momenti e marrjes se file krijohet objekti
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  // funksioni per input me type file, per eventin onChange
  const onFileChange = (event) => {
    // ndryshimi i state
    // marrja e info nga input
    let file = event.target.files[0];
    // convertimit
    getBase64(file)
      .then((result) => {
        file["base64"] = result;
        setSelectedFile(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Funksioni i krijimit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Te dhenat e reja
    const newProperty = {
      title: title,
      desc: desc,
      location: location,
      type: type,
      sqft: sqft,
      price: price,
      ownerNr: ownerNr,
      images: selectedFile,
      bathrooms:bathrooms,
      bedrooms:bedrooms,
      b_year:b_year,
    };

    // Therritja e app
    await axios
      .post("https://royal-realestate.onrender.com/listproperty", newProperty)
      .then((res) => {
        // pas krijimit kallohet tek faqja kryesore
        console.log("Success");
        navigate("/Properties");
      })
      .catch((err) => {
        console.log("Error server  not created" + err);
      });
  };

  return (
    <>
      <section className="property__list-section">
        <div className="property__hero">
          <img className="fluid" src={Img} alt="List Your Property" />
          <h1 className="list__property">List Your Property</h1>
          <div class="overlay"></div>
        </div>
        <Container>
          <Row>
            <h6 className="mb-5">
              *Complete the form with your property details.
            </h6>
          </Row>
          <Row>
            <Form onSubmit={handleSubmit}>
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
                      Year Of Build <i className='bx bx-calendar'></i>
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
                      Bedrooms <i className='bx bxs-bed'></i>
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
                      Bathrooms <i className='bx bx-bath' ></i>
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
                  <Button variant="dark rounded-0" type="submit">
                    List Your Property
                  </Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default PropertyList;
