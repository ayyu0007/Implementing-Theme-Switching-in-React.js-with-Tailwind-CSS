import React, { useEffect, useRef, useState } from "react";
import ThemeSwitch from "../Themeswicher";

// Sample links data (replace with actual data)

export default function Navbar() {


  return (
   <div className=" min-h-screen">
    <ThemeSwitch/>
    <div className="text-accent">demo</div>
   </div>
  );
}
