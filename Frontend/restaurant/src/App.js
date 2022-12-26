import './App.css';
import HomePage from './HomePage/HomePage';

import Signin from './signinpage/Signin';
import SignUp from './signupPage/SignUp';
import CustomerMenu from './CustomerMenu/CustomerMenu'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from './AdminPage/Admin';
import AdminItems from './AdminPage/AdminItems';
import AddItem from './AdminPage/AddItem';
import Payment from './PaymentPage/Payment';
import Profile from './ProfilePage/Profile';
import OrdersDelivery from './OrdersToDelivery/OrdersDelivery';

import AdminDeliveryMen from './AdminPage/AdminDelivery/AdminDeliveryMen';
import AddDeliveryman from './AdminPage/AdminDelivery/AddDeliveryman';
function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orders" element={<OrdersDelivery/>} />
        <Route path="/CustomerMenu" element={<CustomerMenu />} />
        <Route path="/CustomerMenu/Payment" element={<Payment />} />
        <Route path="/CustomerMenu/Profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/menu-items" element={<AdminItems />} />
        <Route path="/admin/menu-items/add-new-item" element={<AddItem />} />
        <Route path="/admin/delivery-men" element={<AdminDeliveryMen />} />
        <Route path="/admin/delivery-men/add-new-delivery" element={<AddDeliveryman />} />

      </Routes>
    </Router>
  );

}



export default App;