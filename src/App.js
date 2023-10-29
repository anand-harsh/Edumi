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
import Notes from './components/Notes/Notes';


function App() {

  window.addEventListener('contextmenu',e=>{
    e.preventDefault();
  })
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CoursePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        <Route path="/notes" element={<Notes/>}/>

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/createcourse" element={<CreateCourse/>} />
        <Route path="/admin/courses" element={<AdminCourses/>} />
        <Route path="/admin/users" element={<Users />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
