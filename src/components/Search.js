import React, { Component } from "react";
import "./Search.css";
// import { Link } from "react-router-dom";
// import SearchPage from "../pages/SearchPage/SearchPage";

// ==================== //

export default class Search extends Component {
  // STATE
  state = {
    search: "",
  };
  // FUNCTION

  onChange = (e) => {
    this.setState({ search: e.target.value });
    console.log(e);
  };

  onSubmit = (e) => {
    e.preventDefault();
    // if (this.state.search == "") {
    //   return this.props.movies;
    // } else {
    this.props.onSearch(this.state.search);
    // }
  };

  // RENDER
  render() {
    console.log(this.props);
    return (
      <div>
        <form action="" onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={this.onChange}
          />
          <button>Search</button>
        </form>
      </div>
    );
  }
}
