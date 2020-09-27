import React, { Component } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import "./SearchNav.css";

export default class SearchNav extends Component {
  render() {
    return (
      <div>
        <nav className="searchNav">
          <Link to="/">
            <span>Home</span>
          </Link>
          <div className="search">
            <Search movies={this.props.movies} onSearch={this.props.onSearch} />
          </div>
        </nav>
      </div>
    );
  }
}
