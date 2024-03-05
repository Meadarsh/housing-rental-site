import { useState } from "react";
import NavBar from "./Components/navBar";
import Home from "./Home/home";
import { BrowserRouter, Routes,Route, Outlet } from "react-router-dom";
import Rent from "./Rent/Rent";
import PG from "./Pg/Pg";
import AdminPage from "./Admin/AdminPage";

function App() {

  return (
    <>
    
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/rent" element={<Rent/>} />
      <Route path="/pg" element={<PG/>} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
