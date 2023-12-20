import logo from "./logo.svg";
import "./App.css";
import NavigationBar from "./NavigationBar";
import { useState } from "react";
import All from "./All";
import FullStackDevelopment from "./Full Stack development";
import DataScience from "./Data Science";
import Cybersecurity from "./Cyber Security";
import Career from "./Career";
import { Routes, Route, Link } from "react-router-dom";
function App(){
  return(
   <nav>
    <Link to="/">All</Link>
    <Link to="/full-stack development">FullStackDevelopment</Link>
    <Link to="/data-science">Data Science</Link>
    <Link to="/cyber-security">Cyber Security</Link>
    <Link to="/career">Career</Link>
   </nav>
  )
}
<Routes>
  <Route path="/" element={<All/>}></Route>
  <Route path="/full-stack" element={<FullStackDevelopment/>}></Route>
  
</Routes>
export default App;
