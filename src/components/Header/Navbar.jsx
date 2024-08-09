import React, { useEffect, useRef, useState } from "react";
import ThemeSwitch from "../Themeswicher";
import LandingPage from "../LandingPage/LandingPage";
// import Profile from "../Profile/Profile";



export default function Navbar() {


  return (
   <div className="min-h-screen">
    <ThemeSwitch />
    {/* <Profile/> */}
    <LandingPage/>
    
   </div>
  );
}
