import { useRef } from "react";
import { Carousel, Space } from "antd";
import SessionHero from "./SessionHero/SessionHero";
import {
  Cart,
  Content,
  Li,
  Next,
  Pre,
  StyleLink,
  StyledButton,
  StyledCarousel,
  Ul,
} from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../components/ScrollToTop/ScrollToTop";

const Home = () => {
  const carouselRef = useRef();
  // const [form] = Form.useForm();
  const [images, setImages] = useState([]);
  const [movieNames, setMovieNames] = useState([]);

  const fetchData = () => {
    axios.get("http://127.0.0.1:8000/api/movie/show").then((res) => {
      const data = res.data.data;
      const imageUrls = data.map((item) => item.posters);
      const names = data.map((item) => item.name);
      setImages(imageUrls);
      setMovieNames(names);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onNextClick = () => {
    carouselRef.current.next();
  };

  const onPrevClick = () => {
    carouselRef.current.prev();
  };
  return (
    <div style={{ color: "#fff" }}>
      <ScrollToTop />
      <SessionHero />
      <Cart
        style={{
          display: "flex",
          padding: "50px 0 20px 0",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            color: "#E42169",
            textTransform: "uppercase",
            fontSize: "2rem",
            marginBottom: "15px",
          }}
        >
          Đăng kí thành viên để có thêm ưu đãi
        </h2>
        <div>
          {/* <Form form={form} style={{ display: "flex" }}>
            <div>
              <Form.Item style={{ width: 350, padding: "0 30px" }}>
                <Select size="large" placeholder="Chọn rạp">
                  1
                </Select>
              </Form.Item>
              <Form.Item style={{ width: 350, padding: "0 30px" }}>
                <Select size="large" placeholder="Chọn ngày">
                  2
                </Select>
              </Form.Item>
            </div>
            <div>
              <Form.Item style={{ width: 350, padding: "0 30px" }}>
                <Select size="large" placeholder="Ngày">
                  3
                </Select>
              </Form.Item>
              <Form.Item style={{ width: 350, padding: "0 30px" }}>
                <Select size="large" placeholder="Xuất chiếu">
                  4
                </Select>
              </Form.Item>
            </div>
          </Form> */}
        </div>
      </Cart>
      <Content>
        <Ul>
          <Space>
            <Li>
              <StyleLink to="">Phim đang chiếu</StyleLink>
            </Li>
            {/* |
            <Li>
              <StyleLink to="">Phim sắp chiếu</StyleLink>
            </Li> */}
          </Space>
        </Ul>
        <StyledCarousel>
          <Carousel
            ref={carouselRef}
            style={{ width: "100%", margin: "0 auto", padding: "50px 250px" }}
            slidesToShow={5}
          >
            {images.map((imageUrl, index) => (
              <div key={index}>
                <img
                  style={{ width: "100%", height: "365px", padding: "0 10px" }}
                  src={imageUrl}
                  alt={`Image ${index}`}
                />
                <div
                  style={{
                    padding: "0 10px",
                    lineHeight: 1.5,
                    fontSize: 18,
                    color: "#FFF",
                  }}
                >
                  <p style={{ padding: "10px 0" }}>{movieNames[index]} </p>
                  <StyledButton type="link" style={{ marginBottom: "10px" }}>
                    <Link to="/show-time"> Đặt vé</Link>
                  </StyledButton>
                </div>
              </div>
            ))}
          </Carousel>

          <Pre onClick={onPrevClick}>
            <DoubleLeftOutlined />
          </Pre>
          <Next onClick={onNextClick}>
            <DoubleRightOutlined />
          </Next>
        </StyledCarousel>
      </Content>
    </div>
  );
};

export default Home;
