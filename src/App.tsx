import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./features/pages/Homepage";
import About from "./features/pages/About";
import PageNotFound from "./features/pages/PageNotFound";
import Login from "./features/pages/Login";
import SignUp from "./features/pages/SignUp";
import AppLayout from "./features/dashboard/pages/AppLayout";
import DashboardOverview from "./features/dashboard/components/DashboardOverview";
import GalleryPage from "./features/dashboard/pages/GalleryPage";
import NotificationsPage from "./features/dashboard/pages/NotificationsPage";
import AnonymousPage from "./features/dashboard/pages/AnonymousPage";
import Market from "./features/dashboard/components/Market";
import MarketPage from "./features/dashboard/pages/MarketPage";
import PaymentPage from "./features/dashboard/pages/PaymentPage";
import Payment from "./features/dashboard/pages/Payment";
import PaymentHistory from "./features/dashboard/pages/PaymentHistory";
import AnonymousMain from "./features/dashboard/pages/AnonymousMain";
import ViewAnonymous from "./features/dashboard/anonymous/ViewAnonymous";
import Conversation from "./features/dashboard/components/Conversation";
import Account from "./features/dashboard/account/AccountHeader";
import AccountPage from "./features/dashboard/pages/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="homepage" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<AppLayout />}>
          <Route index element={<Navigate to="overview" replace={true} />} />
          <Route path="overview" element={<DashboardOverview />} />
          <Route path="/dashboard/gallery" element={<GalleryPage />} />
          <Route
            path="/dashboard/notifications"
            element={<NotificationsPage />}
          />
          <Route
            path="/dashboard/account"
            element={<AccountPage />}
          />
          
          <Route
            path="/dashboard/anonymous/write"
            element={<AnonymousMain />}
          />
          <Route path="/dashboard/anonymous/view" element={<ViewAnonymous />} />
          <Route
            path="/dashboard/anonymous/conversation"
            element={<Conversation />}
          />

          <Route path="/dashboard/payment" element={<PaymentPage />}>
            <Route index element={<Navigate to="form" replace />} />
            <Route path="form" element={<Payment />} />
            <Route path="history" element={<PaymentHistory />} />
          </Route>
          <Route path="/dashboard/market" element={<MarketPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
