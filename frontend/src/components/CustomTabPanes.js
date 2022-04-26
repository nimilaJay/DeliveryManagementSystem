import { Button, Tabs } from "antd";
import { Link } from "react-router-dom";
import CustomTabPanesDelivery from "./CusromeTabPanesDelivery";
import CustomTabPanesOrder from "./CustomTabPanesOrder";
import TrackingOrder from "./TrackingOrder";

const { TabPane } = Tabs;

const CustomTabPanes = () => (
  <center>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Order Details" key="1">
        <CustomTabPanesOrder />
      </TabPane>
      <TabPane tab="Delivery Staff" key="2">
        <CustomTabPanesDelivery />
      </TabPane>
      <TabPane tab="Export Report" key="3">
        <Link to="/report">
          <Button>Click To Generate Report</Button>
        </Link>
      </TabPane>
      <TabPane tab="Track Order Page" key="4">
        <TrackingOrder />
      </TabPane>
    </Tabs>
  </center>
);

export default CustomTabPanes;
