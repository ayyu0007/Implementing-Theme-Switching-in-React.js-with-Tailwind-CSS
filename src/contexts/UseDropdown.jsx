import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const DropdownContext = createContext();

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown context must be used within a DropdownProvider");
  }
  return context;
};

export const DropdownProvider = ({ children, open, setOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isOpen = open !== undefined ? open : dropdownOpen;
  const setIsOpen = setOpen !== undefined ? setOpen : setDropdownOpen;

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, setIsOpen]);

  const contextValue = {
    isOpen,
    openDropdown,
    closeDropdown,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <div ref={dropdownRef} className="relative">
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
