import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Form1 = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <div
      className="d-flex flex-column p-4 box w-100 bg-special-0 br-4"
      style={{
        minWidth: "300px",
        maxWidth: "100%",
        margin: "50px auto",
        height: "fit-content",
      }}
    >
      <div className="to d-flex ai-c">
        <h3 className="fw-9 ta-c upp-txt">Leave a comment</h3>
      </div>

      <Form
        onSubmit={() => {
          alert(`Sent your message: \n`, name, email, message);
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Messages"
            className="w-100 p-2 br-4"
            value={"A message"}
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "180px",
              minHeight: "180px",
              maxHeight: "220px",
            }}
          ></textarea>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            variant="primary"
            type="Submit"
            className="upp-txt text-light px-3"
            style={{ width: "fit-content" }}
          >
            Send Messages
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Form1;
