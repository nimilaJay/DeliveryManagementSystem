import React, { useState, useEffect } from "react";
import { Button, Carousel, Spin } from "antd";
import { Link } from "react-router-dom";

const contentStyle = {
  height: "470px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselView = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 5000);
  }, []);
  return (
    <>
      <center>
        <h1 style={{ fontSize: "50px" }}>Welcome to YoMart</h1>
        <Link to="/home">
          <Button>Get Started</Button>
        </Link>
        <br></br>
        <br></br>
        <Carousel autoplay style={{ width: "50%" }}>
          <div>
            <img src={"https://i.ibb.co/zQ6Hd9k/1.jpg"} style={contentStyle} />
          </div>
          <div>
            <img src={"https://i.ibb.co/S3YvTRx/2.jpg"} style={contentStyle} />
          </div>
          <div>
            <img src={"https://i.ibb.co/kSkrng9/3.jpg"} style={contentStyle} />
          </div>
          <div>
            <img src={"https://i.ibb.co/Dwgqrtd/4.jpg"} style={contentStyle} />
          </div>
        </Carousel>
      </center>
    </>
  );
};

export default CarouselView;
