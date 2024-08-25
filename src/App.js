import "./App.css";
import Dashboard from "./Pages/Dashboard/dashboard";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import SideBar from "./Components/SideBar/sideBar";
import All_Applications from "./Pages/All_Applications/all_Applications";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import All_Applicants from "./Pages/All_Applicants/all_applicants";
import Application_Detail from "./Pages/All_Applications/application_detail";
import Applicant_Detail from "./Pages/All_Applicants/applicant_detail";
import All_Admins from "./Pages/Admin/all_Admins";
import Applicant_Page from "./Pages/Applicant_Page/applicant_page";
import Login from "./Pages/Authentication/login";
import Registeration from "./Pages/Authentication/registeration";
import Admin_Registeration from "./Pages/Authentication/admin_registeration";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <div className="container-scroller">
        <Navbar />

        <div className="container-fluid page-body-wrapper">
          <SideBar />
          <div className="main-panel">
            <div className="content-wrapper">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route
                  path="/admin/all-applications"
                  element={<All_Applications />}
                />
                <Route
                  path="/admin/application-details/:id"
                  element={<Application_Detail />}
                />
                <Route
                  path="/admin/all-applicants"
                  element={<All_Applicants />}
                />
                <Route
                  path="/admin/applicants-detail/:id"
                  element={<Applicant_Detail />}
                />

                <Route path="/userProfile" element={<Applicant_Page />} />
                <Route path="/all-admins" element={<All_Admins />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registeration" element={<Registeration />} />
                <Route
                  path="/admin-registeration"
                  element={<Admin_Registeration />}
                />
              </Routes>
            </div>
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
