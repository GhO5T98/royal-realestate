import React from "react";
import "./passreset.css";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PassReset = () => {
  
  return (
    <>
    <section className="reset__pass">
      <div className="reset__left-side">
        <div className="reset__left-side__text">
          <h1>Royal Real Estate</h1>
          <h3>
            Where Every Home Is A Castle <i class="bx bxs-castle"></i>
          </h3>
        </div>
      </div>

      <div className="reset__right-side">
        <Container>
          <div className="reset__text">
            <h1>Forgot Password?</h1>
            <p>
              Enter the email address you used when you joined and we’ll send
              you instructions to reset your password. <br /> <br /> For security
              reasons, we do NOT store your password. So rest assured that we
              will never send your password via email.
            </p>
          </div>
          <div className="reset__form">
            <Form>
              <Form.Group controlId="formBasicEmail" className="w-100">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="rounded-0"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Button variant="dark" type="submit" className="rounded-0">
                Reset Password
              </Button>
            </Form>
          </div>
        </Container>
        <h4 className="bottom__text">
          New user?<Link to={"/SingUp"}> Create an account</Link>
        </h4>

        <Link to={"/SignIn"} className="back__button">
          <i class="bx bxs-chevron-left"></i>
        </Link>
      </div>
    </section>
    </>
  );
};

export default PassReset;
