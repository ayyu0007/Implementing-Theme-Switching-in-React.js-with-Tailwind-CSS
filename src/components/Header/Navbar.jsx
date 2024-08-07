import React, { useEffect, useRef, useState } from "react";
import ThemeSwitch from "../Themeswicher";
import LandingPage from "../LandingPage/LandingPage";

// Sample links data (replace with actual data)

export default function Navbar() {


  return (
   <div className="min-h-screen">
    <ThemeSwitch />
    <LandingPage/>
   </div>
  );
}
