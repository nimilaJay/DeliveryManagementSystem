import { Table, Tag, Space, Divider, notification } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      await axios
        .get("http://localhost:8070/orders/")
        .then((res) => setData(res.data));
    })();
  });

  const deleteHandler = async (id) => {
    try {
      notification.info({
        title: "Delete Form",
        message: "Successfully Delete The Delivery Staff ",
        placement: "top",
      });
      await axios.delete(`http://localhost:8070/orders/delete/${id}`);
    } catch (error) {
      alert(error);
    }
  };

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
        <>
          <Link to={`/order-edit/${record._id}`}>
            <button style={{ background: "green", color: "white" }}>
              Edit
            </button>
          </Link>
          <button
            style={{ background: "red", color: "white" }}
            onClick={() => deleteHandler(record._id)}
          >
            Dlete
          </button>
        </>
      ),
    },
  ];

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
