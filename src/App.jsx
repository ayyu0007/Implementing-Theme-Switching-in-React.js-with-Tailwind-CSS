import React from 'react';
import Navbar from './components/Header/Navbar';
import './index.css';

// Utility function
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function App({ children }) {
  return (
    <div className={cn("bg-background text-primary", "inter-font")}>
      
        <Navbar />
        <div className="w-full h-full px-4 mt-28">{children}</div>
      
    </div>
  );
}
