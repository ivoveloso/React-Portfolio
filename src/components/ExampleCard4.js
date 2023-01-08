import React from "react";
import Card from "react-bootstrap/Card";
import Whats from "./assets/Whats-on.png";

function ExampleCard4() {
  return (
    <Card style={{ width: "18rem" }} id="ExampleCard4">
      <Card.Img variant="top" src={Whats} />
      <Card.Body>
        <Card.Title>Whats On</Card.Title>
        <Card.Text>
          This is an app which allows users to fetch data from the latest movies
          releases across the globe. It uses API calls for a couple movies
          database services.
        </Card.Text>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://https://virgona.github.io/Whats-on/";
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
