import Banner from "../components/Banner";
import MovieCinema from "../components/Cinema/MovieCinema";
import MovieShowing from "../components/MovieShowing";
import Header from "../../../components/Header/Header";
const Home = () => {
  return (
    <div>
      <Header/>
      <Banner />
      <MovieShowing />  
      <MovieCinema/>
    </div>
  );
};

export default Home;
