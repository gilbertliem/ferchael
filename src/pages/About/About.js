import React, { Component } from "react";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <nav>
          <Link to="/">
            <span>Home</span>
          </Link>
        </nav>
        <div className="self">
          <h1>About Me</h1>
          <p>
            Hi, my name is Gilbert. This time, I make a movie search engine for
            everyone who wants to search their favorite movie. In this website,
            you can search any popular movies, new release movies, and also your
            favourite movie. Movie detail will be show up after you click the
            image / the title of the movie. Take your time to explore this
            website, I hope this website will give you any informations you are
            looking for. Enjoy!
          </p>
          {/* <span>Kindly check another project of mine!</span>
          <div>
            <div>
              <img src="" alt="" />
              <h4>CloudBudget</h4>
            </div>
            <div>
              <img src="" alt="" />
              <h4>...</h4>
            </div>
            <div>
              <img src="" alt="" />
              <h4>...</h4>
            </div>
            <div>
              <img src="" alt="" />
              <h4>...</h4>
            </div>
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}
