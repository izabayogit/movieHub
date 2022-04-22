import React from "react";
import "../styles/sideBar.scss";
import { FaImdb } from "react-icons/fa";
import { GiClapperboard } from "react-icons/gi";
import { AiOutlineStar, AiFillEye } from "react-icons/ai";
import { FaReadme } from "react-icons/fa";
import { Nav } from "react-bootstrap";
export default function MoviesTop() {
  return (
    <div>
      <div className="top-movie-bar">
        <Nav className="me-auto">
          <Nav.Link href="#home">
            {" "}
            <FaImdb className="sideIcon-top" />
          </Nav.Link>
          <Nav.Link href="#link">
            <GiClapperboard className="sideIcon-top" />
          </Nav.Link>
          <Nav.Link href="#link">
            <AiOutlineStar className="sideIcon-top" />
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <FaReadme className="sideIcon-top" />
          </Nav.Link>
          <Nav.Link href="#link">
            {" "}
            <AiFillEye className="sideIcon-top" />
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}
