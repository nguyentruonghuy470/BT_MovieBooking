import React, { useState, useEffect, useCallback } from "react";

import Cinema from "./Cinema";
import MovieCinemaAddress from "./MovieCinemaAddress";

const MovieCinema = () => {
  const [movieId, uscount] = useState("cgv");

  const getAddres = (movieId) => {
    uscount(movieId);
  };

  return (
    <div className="containerMovieShow">
      <div className="containerMovieFlex">
        <div className="MuiTabs-flexContainer1">
          <div className="containerCinemaMovie">
            <Cinema getAddres={getAddres} />
            <MovieCinemaAddress movieId={movieId} />
          </div>
        </div>

        <div className="jss424">
          <div>
            <div className="cardCinema">
              <img
                alt="John Wick"
                src="http://movie0706.cybersoft.edu.vn/hinhanh/john-wick-iiisssssssssxxxssssssssssssssssssss_gp09.jpg"
                className="imgCinema"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCinema;
