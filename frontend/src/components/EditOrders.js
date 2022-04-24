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
  const [oId, setOId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");

  const [form] = Form.useForm();

  const { id } = useParams();

  useEffect(() => {
    (async () =>
      await axios.get(`http://localhost:8070/orders/${id}`).then((res) => {
        console.log(res);
        form.setFieldsValue({
          oId: res.data.oId,
          name: res.data.name,
          address: res.data.address,
          status: res.data.status,
          vehicleNo: res.data.vehicleNo,
        });
        setOId(res.data.oId);
        setName(res.data.name);
        setAddress(res.data.address);
        setStatus(res.data.status);
        setVehicleNo(res.data.vehicleNo);
      }))();
  }, []);

  const updateHandler = async () => {
    try {
      notification.info({
        title: "Update Form",
        message: "Successfully Upadate The Order",
        placement: "top",
      });
      await axios.put(`http://localhost:8070/orders/update/${id}`, {
        name,
        address,
        status,
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
              <h1>Edit Order Details</h1>
              <Divider />
            </center>
            <Form
              {...layout}
              form={form}
              name="control-hooks"
              onFinish={updateHandler}
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
                <Input disabled />
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
                <Input onChange={(e) => setName(e.target.value)} />
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
                <Input onChange={(e) => setAddress(e.target.value)} />
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
                <Input onChange={(e) => setStatus(e.target.value)} />
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
