import React, { useEffect } from "react";
import "../styles/MovieDetails.scss";
import { getCharacters } from "../redux/action";
import moment from "moment";
import { connect } from "react-redux";

const Movie = (props) => {
  return (
    <div>
      <section className="upper-section">Moviehub</section>
      <div>
        <div className="grid-container">
          <div className="item1">
            <p className="movie-title"> {props?.data?.title}</p>
          </div>
          <div className="item2">
            <img src={props.image} alt="#" />{" "}
          </div>
          <div className="item3">
            <h5>Director</h5>
            <p> {props?.data?.director}</p>
            <h5>Producer</h5>
            <p>{props?.data?.producer}</p>
            <h5>Release date</h5>
            <p>{moment(props?.data?.release_date).format("MMMM Do YYYY")}</p>
            <h5>Episode</h5>
            <p>{props?.data?.episode_id}</p>
          </div>
          <div className="item4">
            {" "}
            <h5>Stars</h5>
            <ul>
              <li>
                <div>
                  <p>
                    Name: <span>Jane cafee</span>
                  </p>
                </div>
                <div>
                  <p>
                    Height: <span>83 m</span>
                  </p>
                </div>
                <div>
                  <p>
                    Gender: <span>Male</span>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    Name: <span>Fred Kevin</span>
                  </p>
                </div>
                <div>
                  <p>
                    Height: <span>83 m</span>
                  </p>
                </div>
                <div>
                  <p>
                    Gender: <span>Male</span>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    Name: <span>Fred Kevin</span>
                  </p>
                </div>
                <div>
                  <p>
                    Height: <span>83 m</span>
                  </p>
                </div>
                <div>
                  <p>
                    Gender: <span>Male</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="item5">
            <p>{props?.data?.opening_crawl}</p>
          </div>
        </div>
      </div>
      <div className="story">
        <p>{props?.data?.opening_crawl}</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ movieListReducer }) => {
  const { character } = movieListReducer;
  return { character };
};
export default connect(mapStateToProps, { getCharacters })(Movie);
