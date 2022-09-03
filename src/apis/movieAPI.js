import axiosClient from "./axiosClient";

const movieAPI = {
  getMovies: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP01",
      },
    });
  },
  getBanners: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  getMovieCinema: () => {
    return axiosClient.get("QuanLyRap/LayThongTinHeThongRap");
  },

  getMovieCinemaDetails: async (movieId) => {
    return axiosClient.get("QuanLyRap/LayThongTinCumRapTheoHeThong", {
      params: {
        maHeThongRap: movieId,
      },
    });
  },
};

export default movieAPI;
