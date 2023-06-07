import React, { useState } from "react";
import "./signin.css";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  // Cdo input ka nje state
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const User = {
      // username: username,
      fullname: fullname,
      password: password,
    };
    // Therritja e api
    await axios
      .post("http://localhost:5001/signin", User)
      .then((res) => {
        // Shfaqja e te dhenave - testim
        // console.log(res.data)
        // Ruan nje kod, fjala token eshte marre nga route i auth

        window.localStorage.setItem("token", res.data);
        // Kalon tek faqja kryesore
        navigate("/");
      })
      .catch((error) => {
        console.log("User not found" + error);
        toast.error("User not found");
      });
  };

  return (
    <section className="sign__in">
      <div className="signin__left-side">
        <div className="left-side__text">
          <h1>Royal Real Estate</h1>
          <h3>
            Where Every Home Is A Castle <i class="bx bxs-castle"></i>
          </h3>
        </div>
      </div>

      <div className="signin__right-side">
        <Container>
          <h1>Sign In</h1>
          <div className="signin__form">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName" className="w-100">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  className="rounded-0"
                  onChange={(e) => setFullname(e.target.value)}
                />
                
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="w-100 ">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="rounded-0"
                />
                <Form.Text className="text-muted">
                  <Link to={"/PasswordReset"}>Forgot Password?</Link>
                </Form.Text>
              </Form.Group>
              <Button variant="dark" type="submit" className="rounded-0">
                Sign In
              </Button>
              <ToastContainer
                oastContainer
                position="bottom-right"
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
        <h4 className="bottom__text">
          New user?<Link to={"/SignUp"}> Create an account</Link>
        </h4>
      </div>
    </section>
  );
};

export default Signin;
