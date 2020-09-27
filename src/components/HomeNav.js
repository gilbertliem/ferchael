import React, { Component } from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom";

// ==================== //

export default class HomeNav extends Component {
  render() {
    return (
      <div className="homenav">
        <nav>
          {/* <Link to="/"> */}
          <h1>Movie Finder</h1>
          {/* </Link> */}
          <ul>
            <Link to="/popular">
              <li movies={this.props.movies} onSearch={this.props.onSearch}>
                POPULAR
              </li>
            </Link>
            <Link to="/about">
              <li movies={this.props.movies} onSearch={this.props.onSearch}>
                ABOUT
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
