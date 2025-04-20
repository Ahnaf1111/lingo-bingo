import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
const Banner = () => {
  return (
    <div className="container mx-auto h-[50%]">
      <Carousel>
        <div>
          <img src={banner1} />
          <p className="legend">Learn from us</p>
        </div>
        <div>
          <img src={banner2} />
          <p className="legend">JAPANESE Language</p>
        </div>
        <div>
          <img src={banner3} />
          <p className="legend">Paid Course Also Available</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

<Carousel>
  <div>
    <img src="assets/1.jpeg" />
    <p className="legend">Legend 1</p>
  </div>
  <div>
    <img src="assets/2.jpeg" />
    <p className="legend">Legend 2</p>
  </div>
  <div>
    <img src="assets/3.jpeg" />
    <p className="legend">Legend 3</p>
  </div>
</Carousel>;
