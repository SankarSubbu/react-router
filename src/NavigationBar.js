import React from "react";
import { NavLink } from "react-router-dom";
import All from "./All";
import FullStackDevelopment from "./Full Stack development";
import DataScience from "./Data Science";
import Cybersecurity from "./Cyber Security";
import Career from "./Career";
import CardsContainer from "./CardsContainer";
const NavigationBar  = () =>{
 return(
  <nav>
   <NavLink to="/">All</NavLink>
   <NavLink to="/full-stack development">Full Stack Development</NavLink>
   <NavLink to="/data-science">Data Science</NavLink>
   <NavLink to="/cyber-security">Cyber Security</NavLink>
   <NavLink to="/career">Career</NavLink>
  </nav>
 )
}
export default NavigationBar