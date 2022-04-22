import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Movie from "../components/Movie";
import MoviesTop from "../components/MoviesTop";
import "../styles/MovieDetails.scss";
import { useParams } from "react-router-dom";
import { getMovie, getCharacters } from "../redux/action";
import { connect } from "react-redux";
import { posters } from "../utils/posterImages";

const MovieDetails = (props) => {
  let { id } = useParams();
  useEffect(() => {
    props.getMovie(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="movie-top-bar">
        <MoviesTop />
      </div>
      <div className="movie-details">
        <SideBar />
        <div>
          <Movie data={props?.movie?.data} image={posters[id - 1]} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ movieListReducer }) => {
  const { movie, character } = movieListReducer;
  return { movie, character };
};
export default connect(mapStateToProps, { getMovie, getCharacters })(
  MovieDetails
);
