import "../Cinema/css/MovieShowingStyle.css";

import { useSelector, useDispatch } from "react-redux";

import useRequest from "hooks/useRequest";
import movieAPI from "../../../../apis/movieAPI";

import React, { useState, useEffect } from "react";

const Cinema = ({ getAddres }) => {
  const {
    data: movieCinema,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovieCinema());
  // useEffect(() => {
  //   dispatch(getMovieCinema());
  // }, []);

  return (
    <>
      <div className="MuiBox-root">
        {movieCinema?.map((i) => {
          return (
            <button
              className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss161 Mui-selected"
              onClick={() => getAddres(i.tenHeThongRap)}
            >
              <span className="MuiTab-wrapper">
                <div className="MuiAvatar-circle">
                  <img
                    alt="bhd-star-cineplex"
                    src={i.logo}
                    className="MuiAvatar-img"
                  />
                </div>
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Cinema;
