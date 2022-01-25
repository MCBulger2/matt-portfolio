import React from "react";

import Page from "../../Page/Page";

import "./home.scss";

const Home = () => {
  return (
    <Page className="home">
      <div className="main">
        <div className="heading">Hi, I'm Matt.</div>
        <div className="subheading">
          I'm a computer science student. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut congue arcu dolor, suscipit lacinia
          nibh rutrum vel.
        </div>
        <div className="buttons">
            <button>Portfolio</button>
        </div>
      </div>
    </Page>
  );
};

export default Home;
