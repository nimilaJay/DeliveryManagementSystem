import { Tabs } from "antd";
import AddDelivery from "./AddDelivery";
import DeliveryStaff from "./DeliveryStaff";
import OrderDetails from "./OrderDetails";

const { TabPane } = Tabs;
const CustomTabPanesDelivery = () => (
  <center>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Create Delivery Staff" key="1">
        <AddDelivery />
      </TabPane>
      <TabPane tab="Display Delivery Staff" key="2">
        <DeliveryStaff />
      </TabPane>
    </Tabs>
  </center>
);

export default CustomTabPanesDelivery;
