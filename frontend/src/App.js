import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "antd/dist/antd.css";
import AddDelivery from "./components/AddDelivery";
import EditDelivery from "./components/EditDelivery";
import CarouselView from "./components/Home";
import EditOrders from "./components/EditOrders";
import Report from "./components/Report";
import TrackOrderUser from "./components/TrackOrderUser";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CarouselView />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/add" element={<AddDelivery />} />
          <Route path="/edit-delivery/:id" element={<EditDelivery />} />
          <Route path="/order-edit/:id" element={<EditOrders />} />
          <Route path="/report" element={<Report />} />
          <Route path="/trackyourorder" element={<TrackOrderUser />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
