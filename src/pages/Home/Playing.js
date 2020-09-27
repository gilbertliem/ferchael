import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import "./Playing.css";

// ==================== //

export default class Playing extends Component {
  state = {
    movies: {},
  };

  // RENDER
  render() {
    const { movies, currentPage, postPerPage, onSearch } = this.props;
    const lastIndex = currentPage * postPerPage;
    const firstIndex = lastIndex - postPerPage;
    const currentMovies = movies.slice(firstIndex, lastIndex);
    const totalPages = movies.length / postPerPage;

    // const prevPage = () => {
    //   if (currentPage > Math.ceil(movies / postPerPage)) {
    //     this.setState({ currentPage: currentPage - 1 });
    //   }
    // };

    // const nextPage = () => {
    //   if (currentPage < Math.ceil(movies / postPerPage)) {
    //     this.setState({ currentPage: currentPage + 1 });
    //   }
    // };

    return (
      <>
        <div className="playing">
          <Search onSearch={onSearch} movies={movies} />
        </div>
        <div className="body">
          {movies.length > 0
            ? movies.map((data) => (
                <Link to={`/playing/${data.id}`} key={data.id} className="card">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt={data.title}
                  />
                  <div className="info">
                    <span>{data.title}</span>
                    <span className="rating">{data.vote_average}</span>
                  </div>
                </Link>
              ))
            : "Movie is not available."}
        </div>
        {/* <div>
          <button className="page-btn" onClick={prevPage}>
            <i className="material-icons">keyboard_arrow_left</i>
          </button>
          <button className="page-btn" onClick={nextPage}>
            <i className="material-icons">keyboard_arrow_right</i>
          </button>
        </div> */}
      </>
    );
  }
}
