import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Cover from "./pages/Home/Cover";
import Playing from "./pages/Home/Playing";
import Footer from "./components/Footer";
import HomeNav from "./components/HomeNav";
import Loading from "./components/images/loading.gif";
// import Search from "./components/Search";

import "./Main.css";

// ==================== //

export default class Main extends Component {
  // STATE
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      postPerPage: 5,
    };
  }
  // FUNCTION
  componentDidMount = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=86ecab01572806c443d2d6f0ebec2d77"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.results });
        console.log(data);
        // console.log(this.state.movies);
        this.setState({ loading: false });
      });
  };

  onSearch = (keyWords) => {
    this.setState({ movies: [] });
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=86ecab01572806c443d2d6f0ebec2d77&query=${keyWords}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.results });
        // console.log(data);
        // console.log(this.state.movies);
      });
  };

  // RENDER
  render() {
    const { movies, currentPage, postPerPage } = this.state;
    return (
      <div className="container">
        <HomeNav movies={movies} onSearch={this.onSearch} />
        <div>
          <Playing
            movies={movies}
            onSearch={this.onSearch}
            currentPage={currentPage}
            postPerPage={postPerPage}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
