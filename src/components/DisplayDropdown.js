import React from 'react';
import '../App.css';


const DisplayDropdown = ({ value, onChange }) => {
  return (
    <div className="display-drop-down">
      <div className='paragraph-container'>
      <p className="grouping">Grouping</p>
      </div>
      <div className='dropdown-container-unique'>
        <select className="dropdown" value={value} onChange={e => onChange(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      {/* <Select options={['status', 'user', 'priority']} /> */}
    </div>
  );
};

export default DisplayDropdown;
