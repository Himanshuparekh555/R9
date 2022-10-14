import React from "react";
import "./index.scss";

import TopContent from "../TopContent/index";
import OurMission from "../OurMission/Index";
import OurInitiatives from "../OurInitiatives/Index";
import Chairman from "../Chairman/Index";
import OurTeam from "../OurTeam/Index";


const HomePage = () => {
  return (
    <>
      <TopContent />
      <OurMission />
      <OurInitiatives />
      <Chairman />
      <OurTeam />
    </>
  );
};

export default HomePage;