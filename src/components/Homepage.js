import React from "react";
import MessageTimeline from "./MessageTimeline";


const Homepage = ({currentUser}) => {
  if(!currentUser.isAuthenticated) {
    return(
      <div className="home-hero">
        <h1>What's Chirpin'</h1>
      </div>
    );
  }

  return(
    <div>
      <MessageTimeline />
    </div>
  );
};

export default Homepage;
