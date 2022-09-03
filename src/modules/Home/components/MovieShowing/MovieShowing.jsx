import { useNavigate } from "react-router-dom";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import "../MovieShowing/css/styleMovie.css"
import useRequest from "hooks/useRequest";
import movieAPI from "apis/movieAPI";
const MovieShowing = () => {
  // useNavigate là một hook dùng để điều hướng url
  const navigate = useNavigate();

  const {
    data: movies,
    isLoading,
    error,
  } = useRequest(() => movieAPI.getMovies());

  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <>
      <div className="containerCard1">
        <div className="containerCard2">
          <div className="containerCard">
            {movies?.map((movie) => {
              return (
                <div key={movie.maPhim} className="containerCard3">
                  <Card
                    shadow="sm"
                    p="lg"
                    radius="md"
                    withBorder
                    className="p-0"
                  >
                    <Card.Section
                      component="a"
                      href="https://mantine.dev/"
                      className="m-0"
                    >
                      <div className="cardImg">
                        <img src={movie.hinhAnh} />
                      </div>
                    </Card.Section>

                    <Group
                      position="apart"
                      mt="md"
                      mb="xs"
                      className="justify-content-start gap"
                    >
                      <Badge color="pink" variant="light" className="ms-1">
                        <Text weight={800} size={13}>
                          {movie.maNhom}
                        </Text>
                      </Badge>
                      <Text weight={800} size={15}>
                        {movie.tenPhim}
                      </Text>
                    </Group>

                    <Button
                      variant="light"
                      color="blue"
                      fullWidth
                      mt="md"
                      radius="md"
                      onClick={() => goToMovie(movie.maPhim)}
                    >
                      Chi tiết
                    </Button>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieShowing;
