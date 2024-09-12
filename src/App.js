import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard";
import DropdownMenu from "./components/DropdownMenu";
import { groupTickets, sortTickets } from "./components/utils";
import "./components/styles.css";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState("status"); 
  const [sorting, setSorting] = useState("priority"); 

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((res) => res.json())
      .then((data) => {
        setTickets(data.tickets);
        setUsers(data.users);
      });

    // Load saved preferences from localStorage
    const savedGrouping = localStorage.getItem("grouping");
    const savedSorting = localStorage.getItem("sorting");
    if (savedGrouping) setGrouping(savedGrouping);
    if (savedSorting) setSorting(savedSorting);
  }, []);

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem("grouping", newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
    localStorage.setItem("sorting", newSorting);
  };

  // Group and sort the tickets based on the selected options
  const groupedTickets = groupTickets(tickets, grouping, users);
  const sortedTickets = sortTickets(groupedTickets, sorting);

  return (
    <div className="app-container">
      <div className="header">
        <DropdownMenu
          grouping={grouping}
          sorting={sorting}
          onGroupingChange={handleGroupingChange}
          onSortingChange={handleSortingChange}
        />
      </div>
      <div className="background-color-grey">
        <KanbanBoard
          tickets={sortedTickets}
          grouping={grouping}
          users={users}
        />
      </div>
    </div>
  );
}

export default App;
