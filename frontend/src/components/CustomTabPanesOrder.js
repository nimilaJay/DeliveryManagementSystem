import { Tabs } from "antd";
import AddOrder from "./AddOrder";
import OrderDetails from "./OrderDetails";

const { TabPane } = Tabs;
const CustomTabPanesOrder = () => (
  <center>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Create Order" key="1">
        <AddOrder />
      </TabPane>
      <TabPane tab="Display Orders" key="2">
        <OrderDetails />
      </TabPane>
    </Tabs>
  </center>
);

export default CustomTabPanesOrder;
