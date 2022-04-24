import { Table, Tag, Space, Divider, Button, notification } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () =>
      await axios
        .get("http://localhost:8070/delivery/")
        .then((res) => setData(res.data)))();
  }, []);

  const deleteHandler = async (id) => {
    try {
      notification.info({
        title: "Delete Form",
        message: "Successfully Delete The Delivery Staff ",
        placement: "top",
      });
      await axios.delete(`http://localhost:8070/delivery/delete/${id}`);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  const columns = [
    {
      title: "Driver",
      dataIndex: "driver",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Vehicle",
      dataIndex: "vehicle",
    },
    {
      title: "Driver ID Number",
      dataIndex: "driverId",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNo",
    },
    {
      title: "Vehicle Number",
      dataIndex: "vehicleNo",
    },
    {
      title: "",
      render: (record) => (
        <>
          <Link to={`/edit-delivery/${record._id}`}>
            <button style={{ background: "green", color: "white" }}>
              Edit
            </button>
          </Link>
          <button
            style={{ background: "red", color: "white" }}
            onClick={() => deleteHandler(record._id)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
