import React from "react";
import Card from "react-bootstrap/Card";
import sched from "./assets/sched.png";

function ExampleCard3() {
  return (
    <Card style={{ width: "18rem" }} id="ExampleCard3">
      <Card.Img variant="top" src={sched} />
      <Card.Body>
        <Card.Title>sched Dashboard</Card.Title>
        <Card.Text>
          Sched dashboard is an application which uses allows the user to
          schedule its daily work activities
        </Card.Text>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://ivoveloso.github.io/WorkSched/";
          }}
        >
          {" "}
          Github pages
        </button>
      </Card.Body>
    </Card>
  );
}

export default ExampleCard3;
