import React, { Component } from "react";
// import { Link } from "react-router-dom";
import SearchNav from "../../components/SearchNav";
import Footer from "../../components/Footer";
import "./MovieDetail.css";

// ==================== //

export default class MovieDetail extends Component {
  state = {
    movie: [],
    // genres: "",
  };

  componentDidMount = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=86ecab01572806c443d2d6f0ebec2d77`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movie: data });
        console.log(data);
        console.log(this.state.movie);
      });
  };

  render() {
    return (
      <>
        <div className="detail">
          <SearchNav
            movies={this.props.movies}
            onSearch={this.props.onSearch}
          />
          {this.state.movie !== undefined ? (
            <div className="detail-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`}
                alt={this.state.movie.original_title}
              />
              <div className="detail-info">
                <div className="title-rate">
                  <div>
                    <h1>{this.state.movie.original_title}</h1>
                    <h3>{this.state.movie.title}</h3>
                  </div>
                  <span className="rating">
                    {this.state.movie.vote_average}
                  </span>
                </div>
                <p>{this.state.movie.overview}</p>
                <p>Release Date: {this.state.movie.release_date}</p>
              </div>
            </div>
          ) : (
            "Data is not available."
          )}
          <Footer />
        </div>
      </>
    );
  }
  //         {this.state.movie.length !== 0 ? (
  //   {this.state.movie.map((data) => (
  //     <div>
  //       <img
  //         src={`https://image.tmdb.org/t/p/w500${this.state.movie.backdrop_path}`}
  //         alt={data.original_title}
  //       />
  //       <h1>{data.original_title}</h1>
  //     </div>
  //   )}):'}
}
