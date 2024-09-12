// components/DropdownMenu.js
import React, { useState } from "react";
import DisplayDropdown from "./DisplayDropdown";
import SortDropdown from "./SortDropdown";
import "./styles.css";

const DropdownMenu = ({ grouping, sorting, onGroupingChange, onSortingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu-container">

      <button className="display-button" onClick={toggleDropdown}>
        <span className="display-icon">☰</span> Display{" "}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span> {/* Add dropdown arrow */}
      </button>
      {isOpen && ( 
        <div className="dropdown-content">
            <div className="display-drop-down-parent"><DisplayDropdown value={grouping} onChange={onGroupingChange} /></div>
          <div className="display-drop-down-parent"><SortDropdown value={sorting} onChange={onSortingChange} /></div>
          
        </div>
      )}


    </div>
  );
};

export default DropdownMenu;