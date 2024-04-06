import { useState } from "react";
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import HrDash from "./pages/HrDash";
import EmpDash from "./pages/EmpDash";
import DetailsPage from "./pages/DetailsPage";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<LoginPage></LoginPage>}></Route>
      <Route path="/hrDashboard" element={<HrDash></HrDash>}></Route>
      <Route path="/empDashboard" element={<EmpDash/>}></Route>
      <Route path="/details" element={<DetailsPage/>}></Route>
    </Routes>
  );
}

export default App;
