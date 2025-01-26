import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const Homepage = lazy(() => import("./features/pages/Homepage"));
const AppLayout = lazy(() => import("./features/dashboard/pages/AppLayout"));
import About from "./features/pages/About"
import PageNotFound from "./features/pages/PageNotFound"
import Login from "./features/pages/Login"

import SignUp from "./features/pages/SignUp"


import DashboardOverview from "./features/dashboard/components/DashboardOverview";

import GalleryPage from "./features/dashboard/pages/GalleryPage";
const MarketPage = lazy(() => import("./features/dashboard/pages/MarketPage"));

import NotificationsPage from "./features/dashboard/pages/NotificationsPage";
import Market from "./features/dashboard/components/Market";

import PaymentPage from "./features/dashboard/pages/PaymentPage";
import Payment from "./features/dashboard/pages/Payment";
import PaymentHistory from "./features/dashboard/pages/PaymentHistory";
import AnonymousMain from "./features/dashboard/pages/AnonymousMain";
import ViewAnonymous from "./features/dashboard/anonymous/ViewAnonymous";
import Conversation from "./features/dashboard/components/Conversation";
import AccountPage from "./features/dashboard/pages/AccountPage";
import ProfilePage from "./features/dashboard/pages/ProfilePage";
import ElectronicsScreen from "./features/dashboard/market/ElectronicsScreen";
import FoodScreen from "./features/dashboard/market/FoodScreen";
import AccessoriesScreen from "./features/dashboard/market/AccessoriesScreen";
import BeautyScreen from "./features/dashboard/market/BeautyScreen";
import StationaryScreen from "./features/dashboard/market/StationaryScreen";
import FashionScreen from "./features/dashboard/market/FashionScreen";
import FurnitureScreen from "./features/dashboard/market/FurnitureScreen";
import ProductDetail from "./features/dashboard/market/ProductDetail";
import CartPage from "./features/dashboard/pages/CartPage";
import UploadedProducts from "./features/dashboard/pages/UploadedProducts";
import OrderUser from "./features/dashboard/order/OrderUser";
import WishListPage from "./features/dashboard/pages/WishListPage";
import ScrollToTop from "./features/utils/ScrollToTop";
import { ProtectedRoute } from "./features/utils/protectedRoute";
import Spinner from "./features/ui/Spinner";
import axios from "axios";
import { SocketProvider } from "./context/SocketContext";

const queryClient = new QueryClient();
axios.defaults.withCredentials = true;
function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Suspense fallback={<Spinner/>}>

        <ScrollToTop />

        <Routes>
          <Route path="homepage" element={<Homepage />} />
          <Route index element={<Navigate to={"/homepage"} />} />
          <Route path="homepage/about" element={<About />} />
          <Route path="homepage/login" element={<Login />} />
          <Route path="homepage/signup" element={<SignUp />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
            >
              
            <Route index element={<Navigate to="overview" replace={true} />} />
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="/dashboard/gallery" element={<GalleryPage />} />
            <Route
              path="/dashboard/notifications"
              element={<NotificationsPage />}
              />
            <Route path="/dashboard/account" element={<AccountPage />} />
            <Route
              path="/dashboard/account/:id/profile"
              element={<ProfilePage />}
              />
            {/* Chat Route */}

            <Route
              path="/dashboard/anonymous/write"
              element={<SocketProvider><AnonymousMain /></SocketProvider>}
              />
            <Route
              path="/dashboard/anonymous/view"
              element={<SocketProvider><ViewAnonymous /></SocketProvider>}
              />
            <Route
              path="/dashboard/anonymous/conversation"
              element={<SocketProvider><Conversation /></SocketProvider>}
              />

            {/* Payment Route */}

            <Route path="/dashboard/payment" element={<PaymentPage />}>
              <Route index element={<Navigate to="form" replace />} />
              <Route path="form" element={<Payment />} />
              <Route path="history" element={<PaymentHistory />} />
            </Route>

            {/* Market  Route */}

            <Route
              path="/dashboard/market/productdetail"
              element={<ProductDetail />}
              />
            <Route
              path="/dashboard/market/:id/wishlist"
              element={<WishListPage />}
            />
            <Route
              path="/dashboard/market/:id/orders"
              element={<OrderUser />}
              />
            <Route
              path="/dashboard/market/:id/uploadedproducts"
              element={<UploadedProducts />}
            />
            <Route path="/dashboard/market/:id/cart" element={<CartPage />} />

            <Route path="/dashboard/market" element={<MarketPage />}>
              <Route index element={<Market style="main" />} />
              <Route path="electronic" element={<ElectronicsScreen />} />
              <Route path="food" element={<FoodScreen />} />
              <Route path="accessories" element={<AccessoriesScreen />} />
              <Route path="beauty" element={<BeautyScreen />} />
              <Route path="furniture" element={<FurnitureScreen />} />
              <Route path="fashion" element={<FashionScreen />} />
              <Route path="health" element={<BeautyScreen />} />
              <Route path="stationary" element={<StationaryScreen />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
              </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
