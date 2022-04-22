import React from "react";
import "../styles/MovieList.scss";
import moment from "moment";
import { Card } from "react-bootstrap";
export default function MovieList(props) {
  return (
    <Card
      style={{ width: "18rem", backgroundColor: "black" }}
      className="movie-card"
    >
      <Card.Img variant="top" src={props.image} className="cardImg" />
      <div className="card-footer">
        <h5>{props.data.title}</h5>
        <p>
          realeased on {moment(props.data.releas_data).format("MMMM Do YYYY,")}
        </p>
      </div>
    </Card>
  );
}
