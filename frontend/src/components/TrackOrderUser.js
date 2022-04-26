import React, { useState } from "react";
import { Button, Card, Form, Input } from "antd";
import { TrademarkCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

export default () => {
  const [oId, setOId] = useState("");
  const [nic, setNic] = useState("");
  const [data, setData] = useState([]);

  const onSubmit = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8070/orders/track/${oId}`
      );
      console.log(data);
      form.resetFields();
      setData(data);
    } catch (error) {
      alert(error);
    }
  };

  const [form] = Form.useForm();
  return (
    <>
      <center>
        <h1>Welcome Customer</h1>
        <Card
          title="Track Order"
          extra={
            <a href="#">
              <TrademarkCircleOutlined />
            </a>
          }
          style={{ width: 800, marginTop: "50px" }}
        >
          <p>
            Enter your order number to start tracking the status of the order
          </p>
          <Form onFinish={onSubmit} form={form}>
            <Form.Item
              name="Order Id"
              label="Your Order Number"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                prefix="#"
                placeholder="Enter Your Order Number"
                onChange={(e) => setOId(e.target.value)}
                type="number"
              />
            </Form.Item>
            <Form.Item
              name="NIC"
              label="Your NIC Number"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Enter Your NIC Number"
                onChange={(e) => setNic(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                SUBMIT
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <br />
        <br />
        <br />
        {data.length === 0 ? (
          <center>
            <h1 style={{ color: "red" }}>No Data Found</h1>
          </center>
        ) : (
          data.map((value) => (
            <div>
              <span>#{value.oId}</span>
              <br />
              <span>{value.status}</span>
            </div>
          ))
        )}
        <Link to="/">
          <Button>Back</Button>
        </Link>
      </center>
    </>
  );
};
