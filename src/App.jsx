import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './Config/Firebase'; // Correct Firebase path
import Navbar from './Components/Navbar';
import Signup from './Screens/Signup/Signup';
import Login from './Screens/Login/Login';
import ClassForm from './Screens/User/UserForm';
import CustomerForm from './Screens/Customer/CustomerForm';
import { BookingForm } from './Screens/Booking/BookingForm';
import { CustomerList } from './Screens/Customer/CustomerList';
import BookingList from './Screens/Booking/BookingList';
import InventoryDetail from './Screens/Inventory/InventoryDetail';
import InventoryForm from './Screens/Inventory/InventoryForm';
import PaymentDetail from './Screens/Payment/PaymentDetail';
import PaymentMethod from './Screens/Payment/PaymentMethod';
import ReportDetail from './Screens/Report/ReportDetail';
import ReportForm from './Screens/Report/ReportForm';
import RoomForm from './Screens/Room/RoomFrom';
import RoomList from './Screens/Room/RoomList';
import ServiceRequestForm from './Screens/ServiceRequest/ServiceRequestForm';
import ServiceRequestList from './Screens/ServiceRequest/ServiceRequestList';
import StaffList from './Screens/Staff/StafflList';
import StaffRegistration from './Screens/Staff/StaffRegistration';
import UserForm from './Screens/User/UserForm';
import UserList from './Screens/User/UserList';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Customerform" element={<CustomerForm />} />
        <Route path="/Customerlist" element={<CustomerList />} />
        <Route path="/Booking" element={<BookingForm />} />
        <Route path="/Bookinglist" element={<BookingList />} />
        <Route path="/Inventorydetail" element={<InventoryDetail />} />
        <Route path="/Inventoryform" element={<InventoryForm />} />
        <Route path="/Paymentdeatail" element={<PaymentDetail />} />
        <Route path="/Paymentmethod" element={<PaymentMethod />} />
        <Route path="/Reportdetail" element={<ReportDetail />} />
        <Route path="/Reportform" element={<ReportForm />} />
        <Route path="/Roomform" element={<RoomForm />} />
        <Route path="/Roomlist" element={<RoomList />} />
        <Route path="/Servicerequestform" element={<ServiceRequestForm />} />
        <Route path="/Servicerequestlist" element={<ServiceRequestList />} />
        <Route path="/Serviceform" element={<ServiceRequestForm />} />
        <Route path="/Servicelist" element={<ServiceRequestList />} />
        <Route path="/Stafflist" element={<StaffList />} />
        <Route path="/Staffregistration" element={<StaffRegistration />} />
        <Route path="/Userregistration" element={<UserForm />} />
        <Route path="/Userlist" element={<UserList />} />

      </Routes>
    </div>
  );
};

export default App;