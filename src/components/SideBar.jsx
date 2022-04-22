import React from "react";
import "../styles/sideBar.scss";
import { ListGroup } from "react-bootstrap";
import { FaImdb } from "react-icons/fa";
import { GiClapperboard } from "react-icons/gi";
import { AiOutlineStar, AiFillEye } from "react-icons/ai";
import { FaReadme } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };
  return (
    <div className="left-side-bar">
      <ListGroup>
        <ListGroup.Item className="details-bar">
          {" "}
          <FaImdb className="sideIcon" />
        </ListGroup.Item>
        <ListGroup.Item onClick={() => redirect()}>
          <GiClapperboard className="sideIcon" />
          Home
        </ListGroup.Item>
        <ListGroup.Item>
          <AiOutlineStar className="sideIcon" />
        </ListGroup.Item>
        <ListGroup.Item>
          <FaReadme className="sideIcon" />
        </ListGroup.Item>
        <ListGroup.Item>
          <AiFillEye className="sideIcon" />
        </ListGroup.Item>
        <ListGroup.Item>MY PROFILE</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
