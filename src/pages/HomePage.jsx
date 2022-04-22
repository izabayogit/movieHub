import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import "../styles/homePage.scss";
import TopBar from "../components/TopBar";
import MovieList from "../components/MovieList";
import { connect } from "react-redux";
import { getMovieList } from "../redux/action";
import { posters } from "../utils/posterImages";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const redirect = (id) => {
    navigate(`/movie/${id}`);
  };
  const { movieList } = props;
  return (
    <div className="homePage-container">
      <div>
        <TopBar />
      </div>

      <div className="cards-div">
        <Row>
          {movieList?.data?.results?.map((result, index) => (
            <Col
              key={index}
              onClick={() => {
                redirect(index + 1);
              }}
            >
              <MovieList data={result} image={posters[index]} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
const mapStateToProps = ({ movieListReducer }) => {
  const { movieList } = movieListReducer;
  return { movieList };
};

export default connect(mapStateToProps, { getMovieList })(HomePage);
