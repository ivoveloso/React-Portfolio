import React from "react";
import Index from "./assets/index.png";

import Card from "react-bootstrap/Card";

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={Index} alt="Card image" />
      <Card.ImgOverlay>
        {/* <Card.Title>Card title</Card.Title> */}
        <Card.Text>
          <h2 id="email">
            <a href="mailto: ivovg5790@gmail.com">email</a>
          </h2>
          <h2>
            <a href="https://github.com/Ivoveloso" target="_blank">
              Github
            </a>
          </h2>
          <h2>
            <a href="https://www.linkedin.com" target="_blank">
              LinkedIn
            </a>
          </h2>
          <h2>
            <a href="https://www.linkedin.com" target="_blank">
              resume
            </a>
          </h2>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
