import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchNav from "../../components/SearchNav";
import Footer from "../../components/Footer";
import "./Popular.css";

// ==================== //

export default class Popular extends Component {
  state = {
    movies: [],
  };
  // FUNCTION
  componentDidMount = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=86ecab01572806c443d2d6f0ebec2d77"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.results });
        console.log(data);
        console.log(this.state.movies);
      });
  };

  render() {
    return (
      <>
        <div className="popular">
          <SearchNav
            movies={this.props.movies}
            onSearch={this.props.onSearch}
          />
          <div className="playing">
            <span>Popular</span>
          </div>
          <div className="body">
            {this.state.movies.length > 0
              ? this.state.movies.map((movie) => (
                  <Link
                    to={`/popular/${movie.id}`}
                    key={movie.id}
                    className="card"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="info">
                      <span>{movie.title}</span>
                      <span className="rating">{movie.vote_average}</span>
                    </div>
                  </Link>
                ))
              : "Movies is not available."}
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
