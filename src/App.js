import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Shared/Navbar";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import Login from "./Login/Login";
import SingUp from "./Login/SignUp";
import Purchase from "./Purchase/Purchase";
import RequireAuth from "./Login/RequireAuth";
import Dashboard from "./Dashboard/Dashboard";
import MyProfile from "./Dashboard/MyProfile";
import MyOrders from "./Dashboard/MyOrders";
import AddReview from "./Dashboard/AddReview";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddAdmin from "./Dashboard/AddAdmin";
import RequireAdmin from "./Login/RequireAdmin";
import AddProduct from "./Dashboard/AddProduct";
import ManageProduct from "./Dashboard/ManageProduct";
import Payment from "./Dashboard/Payment";
import NotFound from "./Shared/NotFound";
import Blogs from "./Blogs/Blogs";
import Portfolio from "./Portfolio/Portfolio";
import ManageAllOrders from "./Dashboard/ManageAllOrders";
import SeeReviews from "./SeeAll/SeeReviews";
import SeeAllParts from "./SeeAll/SeeAllParts";

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='max-w-7xl mx-auto px-8'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase/:id" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/seereviews" element={<SeeReviews />} />
        <Route path="/seeparts" element={<SeeAllParts />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} >
          <Route index element={<MyProfile />}></Route>
          <Route path="orders" element={<MyOrders />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment></Payment>} />
          <Route path='addadmin' element={<RequireAdmin><AddAdmin /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          <Route path='manageallorders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
