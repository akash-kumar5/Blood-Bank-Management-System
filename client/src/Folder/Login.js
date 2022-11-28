import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {Form , Button} from 'react-bootstrap'

function Login() {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const [dataInput, setDataInput] = useState("");

  const submitThis = () => {
    const info = { email: email, passw: passw };
    setDataInput([info]);
  };

  return (
    <div className=" m-5 p-5 ">
      <div className="m-auto">
        <Form action="" onSubmit={submitThis}>
          <div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </div>
          <Button
            type="submit"
            variant="primary"
            className="btn mt-5 btn-danger p-2 mt-3"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default Login;
