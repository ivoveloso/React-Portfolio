import React from "react";
import Card from "react-bootstrap/Card";
import Teatime from "./assets/teatime.png";

function ExampleCard4() {
  return (
    <Card style={{ width: "18rem" }} id="ExampleCard5">
      <Card.Img variant="top" src={Teatime} />
      <Card.Body>
        <Card.Title>Tea Time</Card.Title>
        <Card.Text>
          This app allows user to acess our tea time e-commerce website and
          order they favorite tea!
        </Card.Text>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/ivoveloso/TeaTimez";
          }}
        >
          {" "}
          Github repo
        </button>
      </Card.Body>
    </Card>
  );
}

export default ExampleCard4;
