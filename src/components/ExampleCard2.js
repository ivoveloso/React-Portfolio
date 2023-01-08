import React from "react";
import Card from "react-bootstrap/Card";
import Passgen from "./assets/Passgen.png";

function ExampleCard2() {
  return (
    <Card style={{ width: "18rem" }} id="ExampleCard2">
      <Card.Img variant="top" src={Passgen} />
      <Card.Body>
        <Card.Title>Passgen</Card.Title>
        <Card.Text>
          Passgen is a password generator that allows you to generate your
          passwords at will
        </Card.Text>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://ivoveloso.github.io/Passgen/";
          }}
        >
          {" "}
          Github pages
        </button>
      </Card.Body>
    </Card>
  );
}

export default ExampleCard2;
