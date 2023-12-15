import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../../context/UserAuthContext";
import { GridLines } from "../../Designs";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (passwordChecks(password)) {
      if (password === confirmPassword) {
        try {
          await signUp(email, password);
          navigate("/");
        } catch (err) {
          setError(err.message);
        }
      } else {
        setError("Make sure your password is the same as comfirm password");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } else {
      setError("Make sure all intances are correct");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const [pass_checks, setPassCheck] = useState([
    {
      id: 1,
      msg: "Password length must be greater than 8.",
      passed: false,
    },
    {
      id: 2,
      msg: "Password must contain atleast 1 number.",
      passed: false,
    },
    // {
    //   id: 3,
    //   msg: "Password must contain atleast 1 symbol.",
    //   passed: false,
    // },
  ]);

  const passwordChecks = (pass) => {
    pass_checks[0].passed = pass.length > 8;
    pass_checks[1].passed = /[0-9]/.test(pass);
    // pass_checks[2].passed = pass
    //   .split("")
    //   .includes("&", "@", "%", "^", "&", "*", "(", ")", "-", "+", "=");

    const eqi = pass_checks[0].passed && pass_checks[1].passed;
    console.log(eqi);
    return eqi;
  };

  return (
    <div className="d-flex flex-column jc-c s_height_o relative-p">
      <GridLines fix />
      <div
        className="d-flex flex-column p-4 box w-100"
        style={{ minWidth: "200px", maxWidth: "540px", margin: "50px auto" }}
      >
        <h2 className="mb-3">Admin Signup</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="px-1 fw-5">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="px-1 fw-5">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                passwordChecks(e.target.value);
                setPassword(e.target.value);
              }}
            />
            <div className="col pt-3">
              <div className="p-2 br-4" style={{ backgroundColor: "#fff" }}>
                <ul className="m-0">
                  {pass_checks.map((check) => {
                    return (
                      <li
                        className={
                          check.passed ? "text.success" : "text-danger"
                        }
                        key={check.id}
                      >
                        {check.msg}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label className="px-1 fw-5">Comfirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="col pt-3">
              <div className="p-2 br-4" style={{ backgroundColor: "#fff" }}>
                <ul className="m-0">
                  <li
                    className={
                      password.length > 0 && password === confirmPassword
                        ? "text.success"
                        : "text-danger"
                    }
                  >
                    Password must be the same as confirm password
                  </li>
                </ul>
              </div>
            </div>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
