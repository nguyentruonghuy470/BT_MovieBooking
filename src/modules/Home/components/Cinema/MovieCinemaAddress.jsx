import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
import { useClearCache } from "react-clear-cache";
import "../Cinema/css/MovieShowingStyle.css";

const MovieCinemaAddress = ({ movieId }) => {
  const {
    data: movie1,
    isLoading,
    error,
    clearCache,
  } = useRequest(() => movieAPI.getMovieCinemaDetails(movieId));
  console.log(movie1);
  return (
    <>
      <div className="MuiBox-root">
        {movie1?.map((i) => {
          return (
            <div key={i.tenCumRap}>
              <div className="MuiTabs-flexContainer">
                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorInherit jss163">
                  <span className="MuiTab-wrapper jss205">
                    <div>
                      <h4 className="MuiTypography-root jss165 MuiTypography-h4">
                        {i.tenCumRap}
                      </h4>
                      <h6 className="MuiTypography-root jss166 MuiTypography-h6">
                        L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh
                      </h6>
                      <a className="jss167" href="/">
                        [chi tiết]
                      </a>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieCinemaAddress;
