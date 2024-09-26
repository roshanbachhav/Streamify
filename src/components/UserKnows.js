import React from "react";
import SimilarMovies from "./SimilarMovies";
import Favorites from "./Favorites";

const UserKnows = ({ id }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-9">
          <SimilarMovies id={id} />
        </div>
        <div className="col-md-3">
          <Favorites />
        </div>
      </div>
    </div>
  );
};

export default UserKnows;
