import React, { useEffect, lazy, Suspense } from "react";

// import Login from "./pages/auth/Login";
// import Home from "./pages/Home";
// import SideDrawer from "./components/drawer/SideDrawer";
// import { Routes, Route } from "react-router-dom";
// import Register from "./pages/auth/Register";
// import Layout from "./components/nav/Layout";
// import RegisterComplete from "./pages/auth/RegisterComplete";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import ForgotPassword from "./pages/auth/ForgotPassword";
// import UserRoute from "./components/routes/UserRoute";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import UserHistory from "./pages/user/UserHistory";
// import Password from "./pages/user/Password";
// import Wishlist from "./pages/user/Wishlist";
// import AdminRoute from "./components/routes/AdminRoute";
// import CategoryCreate from "./pages/admin/category/CategoryCreate";
// import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
// import SubCreate from "./pages/admin/sub/SubCreate";
// import SubUpdate from "./pages/admin/sub/subUpdate";
// import ProductCreate from "./pages/admin/product/ProductCreate";
// import AllProducts from "./pages/admin/product/AllProducts";
// import ProductUpdate from "./pages/admin/product/ProductUpdate";
// import Product from "./pages/Product";
// import CategoryHome from "./pages/category/CategoryHome";
// import SubHome from "./pages/sub/SubHome";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import CreateCoupon from "./pages/admin/coupon/CreateCoupon";
// import Payment from "./pages/Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
// using lazy
const Login = lazy(() => import("./pages/auth/Login"));
const Home = lazy(() => import("./pages/Home"));
const SideDrawer = lazy(() => import("./components/drawer/SideDrawer"));
const Register = lazy(() => import("./pages/auth/Register"));
const Layout = lazy(() => import("./components/nav/Layout"));
const RegisterComplete = lazy(() => import("./pages/auth/RegisterComplete"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const UserRoute = lazy(() => import("./components/routes/UserRoute"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const UserHistory = lazy(() => import("./pages/user/UserHistory"));
const Password = lazy(() => import("./pages/user/Password"));
const Wishlist = lazy(() => import("./pages/user/Wishlist"));
const AdminRoute = lazy(() => import("./components/routes/AdminRoute"));
const CategoryCreate = lazy(() =>
  import("./pages/admin/category/CategoryCreate")
);
const CategoryUpdate = lazy(() =>
  import("./pages/admin/category/CategoryUpdate")
);
const SubCreate = lazy(() => import("./pages/admin/sub/SubCreate"));
const SubUpdate = lazy(() => import("./pages/admin/sub/subUpdate"));
const ProductCreate = lazy(() => import("./pages/admin/product/ProductCreate"));
const AllProducts = lazy(() => import("./pages/admin/product/AllProducts"));
const ProductUpdate = lazy(() => import("./pages/admin/product/ProductUpdate"));
const Product = lazy(() => import("./pages/Product"));
const CategoryHome = lazy(() => import("./pages/category/CategoryHome"));
const SubHome = lazy(() => import("./pages/sub/SubHome"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const CreateCoupon = lazy(() => import("./pages/admin/coupon/CreateCoupon"));
const Payment = lazy(() => import("./pages/Payment"));

import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { currentUser } from "./functions/auth";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        currentUser(idTokenResult.token)
          .then((res) => {
            console.log(res);
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.name,
                email: res.email,
                token: idTokenResult.token,
                role: res.role,
                _id: res._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="col text-center p-5">
          _React Redux EC
          <LoadingOutlined /> MMERCE
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="register/complete" element={<RegisterComplete />} />
          <Route path="forgot/password" element={<ForgotPassword />} />
          <Route
            path="user/history"
            element={
              <UserRoute>
                <UserHistory />
              </UserRoute>
            }
          />
          <Route path="user/password" element={<Password />} />
          <Route path="user/wishlist" element={<Wishlist />} />
          <Route
            path="admin/dashboard"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="admin/category"
            element={
              <AdminRoute>
                <CategoryCreate />
              </AdminRoute>
            }
          />
          <Route
            path="admin/category/:slug"
            element={
              <AdminRoute>
                <CategoryUpdate />
              </AdminRoute>
            }
          />
          <Route
            path="admin/sub"
            element={
              <AdminRoute>
                <SubCreate />
              </AdminRoute>
            }
          />
          <Route
            path="admin/sub/:slug"
            element={
              <AdminRoute>
                <SubUpdate />
              </AdminRoute>
            }
          />
          <Route
            path="admin/product"
            element={
              <AdminRoute>
                <ProductCreate />
              </AdminRoute>
            }
          />
          <Route
            path="admin/products"
            element={
              <AdminRoute>
                <AllProducts />
              </AdminRoute>
            }
          />
          <Route
            path="admin/product/:slug"
            element={
              <AdminRoute>
                <ProductUpdate />
              </AdminRoute>
            }
          />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/category/:slug" element={<CategoryHome />} />
          <Route path="/sub/:slug" element={<SubHome />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

          <Route
            path="/checkout"
            element={
              <UserRoute>
                <Checkout />
              </UserRoute>
            }
          />
          <Route
            path="/admin/coupon"
            element={
              <UserRoute>
                <CreateCoupon />
              </UserRoute>
            }
          />
          <Route
            path="/payment"
            element={
              <UserRoute>
                <Payment />
              </UserRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
