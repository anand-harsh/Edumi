import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Contact from './components/Contact.jsx/Contact';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Subscribe/Subscribe';
import NotFound from './components/NotFound/NotFound';
import PaymentSuccess from './components/Subscribe/PaymentSuccess';
import PaymentFail from './components/Subscribe/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import NotesTab from './components/Notes/NotesTab';
import UpdateProfile from './components/ProfileUpdate';

function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/courses" element={<Courses />} />
          <Route path="/notes" element={<NotesTab />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request" element={<Request />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfail" element={<PaymentFail />} />
          <Route path="/profile/updateprofile" element={<UpdateProfile />} />
        </Route>

        <Route path="/resetPassword/:token" element={<ResetPassword />} />

        {/* Admin routes */}
        <Route element={<ProtectedRoute isAdmin />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/createcourse" element={<CreateCourse />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/users" element={<Users />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
