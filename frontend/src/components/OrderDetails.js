import { Table, Tag, Space, Divider } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const columns = [
  {
    title: "Order ID",
    dataIndex: "oId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Vehicle Number",
    dataIndex: "vehicleNo",
  },
  {
    title: "",
    render: (record) => (
      <Link to={`/order-edit/${record._id}`}>
        <button style={{ background: "green", color: "white" }}>Edit</button>
      </Link>
    ),
  },
];

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8070/orders/")
        .then((res) => setData(res.data));
    })();
  }, []);

  return (
    <>
      <center>
        <Divider />
        <h1>Order Details</h1>
        <Divider />
      </center>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
