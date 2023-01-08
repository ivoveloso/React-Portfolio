import React from "react";
import { Button } from "react-bootstrap";

export default function Header({ setContent }) {
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <h1>
            <span id="Ivo">Ivo Veloso</span>
          </h1>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Button variant="light" onClick={() => setContent("about")}>
                  01/ about
                </Button>
              </li>
              <li className="nav-item">
                <Button variant="light" onClick={() => setContent("projects")}>
                  02/ projects
                </Button>
              </li>
              <li className="nav-item">
                <Button variant="light" onClick={() => setContent("contact")}>
                  03/ contact
                </Button>
              </li>
              <li className="nav-item">
                <Button variant="light" onClick={() => setContent("contact")}>
                  04/ resume
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
