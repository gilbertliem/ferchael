import React, { Component } from "react";
// import HomeNav from "../../components/HomeNav";
import "./Cover.css";

// ==================== //

export default class Cover extends Component {
  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>Movie Finder</h1>
          <form action="text">
            <input
              type="text"
              placeholder="Write Here.."
              onChange={this.onChange}
            />
            <button>Search</button>
          </form>
        </div>
      </div>
    );
  }
}
