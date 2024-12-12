import { Outlet } from "react-router-dom";
import HeaderDashboard from "../components/HeaderDashboard";
import ToggleButton from "../components/ToggleButton";

function PaymentPage() {
  return (
    <div className="bg-white">
      <HeaderDashboard />
      <ToggleButton />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default PaymentPage;
