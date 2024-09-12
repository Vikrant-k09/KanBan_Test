import React from "react";
import Column from "./Column";
import "./styles.css";

const KanbanBoard = ({ tickets, grouping, users }) => {
  if (grouping === "status") {
    tickets = { ...tickets, "Cancelled": [], "Done": [] };
  }
  console.log(tickets);
  const columns = Object.entries(tickets).map(([key, value]) => {
    let columnTitle = key;
    
    if (grouping === "priority") {
      switch (key) {
        case "4":
          columnTitle = "Urgent";
          break;
        case "3":
          columnTitle = "High";
          break;
        case "2":
          columnTitle = "Medium";
          break;
        case "1":
          columnTitle = "Low";
          break;
        case "0":
          columnTitle = "No priority";
          break;
        default:
          columnTitle = key;
      }
    } else if (grouping === "user") {
      const user = users.find((user) => user.id === key);
      columnTitle = user ? user.name : key;
    }

    return (
      <Column key={key} title={columnTitle} tickets={value} users={users} />
    );
  });

  return <div className="kanban-board">{columns}</div>;
};

export default KanbanBoard;