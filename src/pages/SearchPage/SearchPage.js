import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchNav from "../../components/SearchNav";
import Footer from "../../components/Footer";

// ==================== //

export default class SearchFor extends Component {
  state = {
    movies: {},
  };
  //   FUNCTION
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=86ecab01572806c443d2d6f0ebec2d77&query=Jack+Reacher"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data });
      });
  }
  //   RENDER
  render() {
    return (
      <>
        <div className="search">
          <SearchNav />
          <Footer />
        </div>
      </>
    );
  }
}
