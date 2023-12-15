import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="news-letter w-100 bg-special-1 p-5">
      <h2 className="fw-8">Subscribe to newsletter</h2>
      <Form
        onSubmit={() => {
          alert(`Succesfully Subscribed ${email}`);
        }}
      >
        <div className="d-flex ai-c x30-gap bend">
          <Form.Group className="w-100" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="Submit"
            className="upp-case text-light bg-special px-5"
          >
            Subscribe
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Newsletter;
