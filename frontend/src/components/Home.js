import React, { useState, useEffect } from "react";
import { Button, Card, Carousel, Spin } from "antd";
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
        <div style={{ display: "flex" , justifyContent:"space-around"}}>
          <div>
            <h1 style={{ fontSize: "50px" , marginLeft:"400px"}}>Welcome to YoMart</h1>
          </div>
          <div style={{float:"right" , marginTop:"20px"}}>
            <Link to="/home">
              <Button>Admin</Button>
            </Link>
          </div>
        </div>
        <br></br>
        <br></br>
        <div>
          <div>
            <Carousel autoplay style={{ width: "50%", float: "left" }}>
              <div>
                <img
                  src={"https://i.ibb.co/zQ6Hd9k/1.jpg"}
                  style={contentStyle}
                />
              </div>
              <div>
                <img
                  src={"https://i.ibb.co/S3YvTRx/2.jpg"}
                  style={contentStyle}
                />
              </div>
              <div>
                <img
                  src={"https://i.ibb.co/kSkrng9/3.jpg"}
                  style={contentStyle}
                />
              </div>
              <div>
                <img
                  src={"https://i.ibb.co/Dwgqrtd/4.jpg"}
                  style={contentStyle}
                />
              </div>
            </Carousel>
            <div></div>
          </div>
          <div style={{ float: "right" }}>
            <Card
              title={<span style={{ color: "white" }}>Already Registered</span>}
              style={{
                width: 500,
                height: 100,
                background: "green",
                color: "white",
              }}
              extra={
                <p style={{ fontSize: "20px" }}>
                  <i class="fa fa-user" aria-hidden="true"></i>
                </p>
              }
            ></Card>
            <br />
            <Card
              title={<span style={{ color: "white" }}>New To The YoMart</span>}
              style={{
                width: 500,
                height: 100,
                background: "green",
                color: "white",
              }}
              extra={
                <p style={{ fontSize: "20px" }}>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </p>
              }
            ></Card>
            <br />
            <Link to="trackyourorder">
              <Card
                title={<span style={{ color: "white" }}>Track Your Order</span>}
                style={{
                  width: 500,
                  height: 100,
                  background: "green",
                  color: "white",
                }}
                extra={
                  <p style={{ fontSize: "20px" }}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </p>
                }
              ></Card>
            </Link>
            <br />
            <Card
              title={<span style={{ color: "white" }}>Visit The Store</span>}
              style={{
                width: 500,
                height: 100,
                background: "green",
                color: "white",
              }}
              extra={
                <p style={{ fontSize: "20px" }}>
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>
                </p>
              }
            ></Card>
          </div>
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ float: "left" }}>Happy Shopping</h2>
    </>
  );
};

export default CarouselView;
