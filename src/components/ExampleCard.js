import React from "react";
import Card from "react-bootstrap/Card";
import GardenMate from "./assets/gardenmate.png";

function ExampleCard() {
  return (
    <Card style={{ width: "18rem" }} id="ExampleCard">
      <Card.Img variant="top" src={GardenMate} />
      <Card.Body>
        <Card.Title>GardenMate</Card.Title>
        <Card.Text>
          GardenMate is a simple and easy to use task management application.
        </Card.Text>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/ivoveloso/GardenMate";
          }}
        >
          {" "}
          Github repo
        </button>
      </Card.Body>
    </Card>
  );
}

export default ExampleCard;
