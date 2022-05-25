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

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard />
        </RequireAuth>} >
          <Route index element={<MyOrders />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path="payment/:id" element={<Payment></Payment>} />
          <Route path='addadmin' element={<RequireAdmin><AddAdmin /></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='manageproduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
        </Route>
      </Routes>


      <ToastContainer />
    </div>
  );
}

export default App;
