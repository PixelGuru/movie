/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "antd";
import ImageSlideMonday from "../../../../assets/Carousel/monday.jpg";
import ImageSlide1 from "../../../../assets/Carousel/slide1.jpg";
import ImageSlide2 from "../../../../assets/Carousel/slide2.jpg";
import ImageSlideTen from "../../../../assets/Carousel/ten.jpg";

const SessionHero = () => (
  <Carousel
    style={{
      margin: "50px 0 0 0",
    }}
    autoplay
  >
    <div>
      <img src={ImageSlideMonday} />
    </div>
    <div>
      <img src={ImageSlide1} style={{ width: "100%", height: "340px" }} />
    </div>
    <div>
      <img src={ImageSlide2} />
    </div>
    <div>
      <img src={ImageSlideTen} />
    </div>
  </Carousel>
);
export default SessionHero;
