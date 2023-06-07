import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios'
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [fullname, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Te dhenat nga input
    const newUser = {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
    };

    await axios
      .post('https://royal-realestate.onrender.com/signup', newUser)
      .then((res) => {
        // Shfaq te dhenat testim
        // console.log(res.data)
        // Kalon tek komponenti login
        navigate("/SignIn");
      })
      .catch((error) => {
        console.log("User not added " + error);
        toast.error("User not created");
      });
  };
  return (
    <section className="sign__up">
      <div className="signup__left-side">
        <Container>
          <h1>Sign Up</h1>
          <div className="signup__form">
            <Form onSubmit={handleSubmit} className="text-center">
              <div className="signup__name">
                <Form.Group  controlId="formBasicFullName" className="w-50 text-start">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    onChange={(e) => setFullName(e.target.value)}
                    type="text"
                    placeholder="Enter Username"
                    className="rounded-0"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicUserName" className="w-50  text-start">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Enter Username"
                    className="rounded-0"
                  />
                </Form.Group>
              </div>
              <Form.Group controlId="formBasicEmail" className="w-100  text-start">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                  className="rounded-0"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="w-100  text-start ">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="rounded-0"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox" className="w-100">
                <Form.Check
                  type="checkbox"
                  label="Creating an account means you’re okay  with our Terms of Service and Privacy Policy."
                />
              </Form.Group>
              <Button variant="dark" type="submit" className="rounded-0">
                Sign Up
              </Button>
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
            </Form>
          </div>
        </Container>
        <h4 className="signup__bottom__text">
          Already a user?<Link to={"/SignIn"}> Sign In </Link>
        </h4>
      </div>
      <div className="signup__right-side">
        <div className="right-side__text">
          <h1>Royal Real Estate</h1>
          <h3>
            Where Every Home Is A Castle <i class="bx bxs-castle"></i>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Signup;
