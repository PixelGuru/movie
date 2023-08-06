import { useEffect, useState } from "react";
import { Card, Space, Spin } from "antd";
import { StyleButtonChoseTime } from "../styled";
import { Link } from "react-router-dom";

const ShowTimeHoChiMinh = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/show-time/ho-chi-minh"
      );

      const data = await response.json();
      console.log(data);
      const movieMap = data.data.reduce((acc, movie) => {
        if (!acc[movie.movie_name]) {
          acc[movie.movie_name] = [];
        }
        acc[movie.movie_name].push(movie);
        return acc;
      }, {});

      const groupedMovies = Object.values(movieMap);
      setMovies(groupedMovies);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movie list:", error);
      setIsLoading(false);
    }
  };
  const shownDates = [];

  return (
    <div style={{ width: "50%", margin: "30px auto" }}>
      {isLoading ? (
        <Spin
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
          size="large"
        />
      ) : (
        movies.map((groupedMovie) => (
          <Card
            key={groupedMovie[0].id}
            style={{
              background: "rgb(26 0 22 / 40%)",
              margin: "10px 0",
              border: "none",
              color: "#fff",
            }}
          >
            <div style={{ display: "flex", alignItems: "start" }}>
              <div style={{ width: "30%" }}>
                <img
                  src={groupedMovie[0].posters}
                  alt={groupedMovie[0].movie_name}
                  style={{ width: 250, height: 375, objectFit: "cover" }}
                />
                <h2 style={{ textAlign: "center", fontSize: 22 }}>
                  {groupedMovie[0].movie_name}
                </h2>
              </div>

              <div>
                <div style={{ marginBottom: 40, marginLeft: 20, fontSize: 17 }}>
                  <h4>Nội dung</h4>
                  <p>{groupedMovie[0].content}</p>
                </div>

                {/* Hiển thị các giờ chiếu */}
                <div>
                  {groupedMovie.map((movie) => {
                    // Kiểm tra xem ngày đã xuất hiện trước đó chưa
                    if (!shownDates.includes(movie.date_show)) {
                      shownDates.push(movie.date_show);
                      return (
                        <div
                          key={movie.id}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            marginTop: 15,
                            backgroundColor: "rgba(0,0,0,0.2)",
                          }}
                        >
                          <p
                            style={{
                              marginRight: 10,
                              fontSize: 16.5,
                              padding: 15,
                              background: "#F5C549",
                              color: "#000",
                              fontWeight: "bold",
                            }}
                          >
                            {movie.date_show}
                          </p>
                          <Space size={10} style={{ display: "flex" }}>
                            {groupedMovie
                              .filter((m) => m.date_show === movie.date_show)
                              .map((m) => (
                                // Thay đổi đường dẫn của Link thành `/booking/:screeningId`
                                <StyleButtonChoseTime
                                  style={{ fontSize: 16 }}
                                  key={m.id}
                                >
                                  {/* Truyền screeningId vào URL params */}
                                  <Link to={`/booking/${m.movie_id}/${m.id}`}>
                                    {m.start_time}
                                  </Link>
                                </StyleButtonChoseTime>
                              ))}
                          </Space>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default ShowTimeHoChiMinh;
