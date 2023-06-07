import React, { useRef, useState } from "react";
import "./contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  //Form Submit//
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5bhr1vk",
        "template_yv64gg4",
        form.current,
        "6PmdCCLjch6d_UDrg"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your Message Has Been Sent !");
          resetForm();
        },
        (error) => {
          console.log(error.text);
          toast.error("Message Not Sent!");
        }
      );
  };
  //Form Submit//

  //Form Reset//
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [records, setRecords] = useState([]);
  const resetForm = (e) => {
    setRecords([...records, formValues]);
    setFormValues({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <section className="contact__section">
      <Container className="mt-5">
        <Row className="mb-4">
          <Col>
            <h6 className="small__header">Contact</h6>
            <h1 className="big__header mb-4">Get In Touch !</h1>
          </Col>
        </Row>
        <Row className="reverse__row">
          <Col sm={12} md={5} lg={6} className="contact__form text-center">
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group
                className="mb-4 text-start"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  className="shadow-none border-0 "
                  name="user_name"
                  value={formValues.fullName}
                  onChange={(e) =>
                    setFormValues({ ...formValues, fullName: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-4 text-start"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="shadow-none border-0 "
                  name="user_email"
                  value={formValues.email}
                  onChange={(e) =>
                    setFormValues({ ...formValues, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-4 text-start"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  className="shadow-none border-0 "
                  name="email_subject"
                  value={formValues.subject}
                  onChange={(e) =>
                    setFormValues({ ...formValues, subject: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group
                className="mb-4 text-start"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="shadow-none border-0 "
                  name="message"
                  value={formValues.message}
                  onChange={(e) =>
                    setFormValues({ ...formValues, message: e.target.value })
                  }
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                className="rounded-0 mt-5"
                value="Send"
              >
                Send Message
              </Button>
            </Form>
            <ToastContainer
                oastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
          </Col>

          <Col sm={12} md={7} lg={6} className="contact__info">
            <h4 className="text-center">Let's get in touch</h4>
            <h6>We're open for any suggestion or just to have a chat!</h6>
            <div className="c__infos">
              <p>
                <i className="bx bx-map-alt"></i>Address:Rr. Dritan Hoxha,
                Laprakë, Tirana
              </p>
              <p>
                <i className="bx bx-phone"></i>Phone: +355*******
              </p>
              <p>
                <i className="bx bx-envelope"></i>Email:support@royalgroup.com
              </p>
              <p>
                <i className="bx bxl-telegram"></i>Telegram:RoyalGroup
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
