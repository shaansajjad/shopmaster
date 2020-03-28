import React from "react";
import DirectoryMenu from "../directory/Directory";
import Banner from "../pages/banner/Banner";
import "../../css/Homepage.scss";

const Homepage = () => (
  <div className="homepage">
    <Banner />
    <DirectoryMenu />
  </div>
);

export default Homepage;
