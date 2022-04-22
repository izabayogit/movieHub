import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetails from "../pages/MovieDetails";

class Routa extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    );
  }
}

export default Routa;
