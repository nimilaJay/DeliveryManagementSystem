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
import {
  SendOutlined,
  CrownOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
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

const AddDelivery = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [driver, setDriver] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [driverId, setDriverId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");

  const createHandler = async () => {
    try {
      await axios.post("http://localhost:8070/delivery/create", {
        driver,
        vehicle,
        driverId,
        phoneNo,
        vehicleNo,
      });
      notification.info({
        title: "Create Form",
        message: "Successfully Created The Delivery Staff",
        placement: "top",
      });
      form.resetFields();
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

  const [form] = Form.useForm();

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
          name="diver"
          label="Driver"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter Driver Name"
            onChange={(e) => setDriver(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="vehicle"
          label="Vehicle"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter Vehicle Name"
            onChange={(e) => setVehicle(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="Driver Id"
          label="Driver ID"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter Driver Id"
            onChange={(e) => setDriverId(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="phone number"
          label="Phone Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter Phone Number"
            onChange={(e) => setPhoneNo(e.target.value)}
            type={"number"}
          />
        </Form.Item>
        <Form.Item
          name="vehicle number"
          label="Vehicle Number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input
            placeholder="Enter Vehicle Number"
            onChange={(e) => setVehicleNo(e.target.value)}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Apply
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddDelivery;
