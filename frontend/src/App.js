import { React, useEffect, Component, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import axios from "axios";
import "./App.css";
import Showimg from "./components/Showimg";
import AddNewImg from "./components/AddNewImg";
import EditImg from "./components/EditImg";
import DeleteImg from "./components/DeleteImg";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/show/:id" element={<Showimg />} />
          <Route path="/new" element={<AddNewImg />} />
          <Route path="/:id/edit" element={<EditImg />} />
          <Route path="/delete/:id" element={<DeleteImg />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
