import { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";
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

const EditOrders = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [driver, setDriver] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [driverId, setDriverId] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");

  const [form] = Form.useForm();

  const { id } = useParams();

  useEffect(() => {
    (async () =>
      await axios.get(`http://localhost:8070/delivery/get/${id}`).then((res) => {
        console.log(res);
        form.setFieldsValue({
          driver: res.data.driver,
          vehicle: res.data.vehicle,
          driverId: res.data.driverId,
          phoneNo: res.data.phoneNo,
          vehicleNo: res.data.vehicleNo,
        });
        setDriver(res.data.driver);
        setVehicle(res.data.vehicle);
        setDriverId(res.data.driverId);
        setPhoneNo(res.data.phoneNo);
        setVehicleNo(res.data.vehicleNo);
      }))();
  }, []);

  const updateHandler = async () => {
    try {
      notification.info({
        title: "Update Form",
        message: "Successfully Upadate The Delivery Staff",
        placement: "top",
      });
      await axios.put(`http://localhost:8070/delivery/update/${id}`, {
        driver,
        vehicle,
        driverId,
        phoneNo,
        vehicleNo,
      });
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
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Menu theme="dark" mode="inline" selectedKeys={"2"}>
            <Menu.Item key="0" icon={<SendOutlined />}>
              Owner
            </Menu.Item>
            <Menu.Item key="1" icon={<CrownOutlined />}>
              Product
            </Menu.Item>
            <Menu.Item key="2" icon={<ProfileOutlined />}>
              Delivery
            </Menu.Item>
            <Menu.Item key="3" icon={<ProfileOutlined />}>
              Branch
            </Menu.Item>
            <Menu.Item key="4" icon={<ProfileOutlined />}>
              Feedback
            </Menu.Item>
            <Menu.Item key="5" icon={<ProfileOutlined />}>
              Stock
            </Menu.Item>
            <Menu.Item key="6" icon={<ProfileOutlined />}>
              Billing
            </Menu.Item>
            <Menu.Item key="7" icon={<ProfileOutlined />}>
              Customer
            </Menu.Item>
            <Menu.Item key="8" icon={<ProfileOutlined />}>
              Pharmacy
            </Menu.Item>
          </Menu>
          <br />
          <br />
        </Sider>

        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>{greet}</Breadcrumb.Item>
              <Breadcrumb.Item>Admin</Breadcrumb.Item>
            </Breadcrumb>
            <Link to="/home">
              <Button>Back</Button>
            </Link>
            <center>
              <Divider />
              <h1>Edit Delivery Staff</h1>
              <Divider />
            </center>
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={updateHandler}
            >
              <Form.Item
                name="driver"
                label="Driver"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onChange={(e) => setDriver(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="vehicle"
                label="Vehicle Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onChange={(e) => setVehicle(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="driverId"
                label="Driver ID"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onChange={(e) => setDriverId(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="phoneNo"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input onChange={(e) => setPhoneNo(e.target.value)} />
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
                <Input onChange={(e) => setVehicleNo(e.target.value)} />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Edit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Cancel
                </Button>
              </Form.Item>
            </Form>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Copyright © {date.getFullYear()} Delivery Management
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default EditOrders;
