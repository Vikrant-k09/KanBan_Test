import React from 'react';
import '../App.css';

const SortDropdown = ({ value, onChange }) => {
  return (
   


<div className="display-drop-down">
      <p className="grouping">Ordering</p>
      <select className="dropdown" value={value} onChange={e => onChange(e.target.value)}>
      <option value="priority">Priority</option>
      <option value="title">Title</option>
    </select>
    </div>
  );
};

export default SortDropdown;