import { Button, Tabs } from "antd";
import { Link } from "react-router-dom";
import CustomTabPanesDelivery from "./CusromeTabPanesDelivery";
import DeliveryStaff from "./DeliveryStaff";
import OrderDetails from "./OrderDetails";

const { TabPane } = Tabs;

const CustomTabPanes = () => (
  <center>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Order Details" key="1">
        <OrderDetails />
      </TabPane>
      <TabPane tab="Delivery Staff" key="2">
        <CustomTabPanesDelivery />
      </TabPane>
      <TabPane tab="Export Report" key="3">
        <Link to="/report">
          <Button>Click To Generate Report</Button>
        </Link>
      </TabPane>
    </Tabs>
  </center>
);

export default CustomTabPanes;
