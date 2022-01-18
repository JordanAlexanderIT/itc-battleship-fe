import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Components/Home";
import Play from "./Components/Play";
import About from "./Components/About";
import Profile from "./Components/Profile";
import Admin from "./Components/Admin";
import OrsTestingPage from "./Ors/OrsTestingPage.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="play" element={<Play />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="ors" element={<OrsTestingPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
