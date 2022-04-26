import { useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Form,
  Input,
  Select,
  Divider,
  notification,
} from "antd";
import "antd/dist/antd.css";
import {} from "antd";
import axios from "axios";
const { Header, Content, Footer, Sider } = Layout;

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddOrder = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [oId, setOId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");

  const [form] = Form.useForm();

  const createHandler = async () => {
    try {
      notification.info({
        title: "Create Form",
        message: "Successfully Created The Order",
        placement: "top",
      });
      form.resetFields();
      await axios
        .post("http://localhost:8070/orders/create", {
          name,
          oId,
          address,
          status,
          vehicleNo,
        })
        .then(() => form.resetFields());
    } catch (error) {
      alert(error);
    }
  };

  const date = new Date();
  const hrs = date.getHours();

  let greet;

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs < 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 19) greet = "Good Evening";
  else greet = "Good Night";

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={createHandler}
      >
        <Form.Item
          name="oId"
          label="Order Id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter Order ID"
            onChange={(e) => setOId(e.target.value)}
            type={"number"}
          />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
          />
        </Form.Item>
        <Form.Item
          name="status"
          label="Status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Enter Status"
          />
        </Form.Item>
        <Form.Item
          name="vehicleNo"
          label="Vehicle Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            onChange={(e) => setVehicleNo(e.target.value)}
            placeholder="Enter Vehicle Number"
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddOrder;
