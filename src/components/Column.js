import React from "react";
import Card from "./Card";
import { ReactComponent as Add } from "./icon/add.svg";
import { ReactComponent as ThreeDots } from "./icon/3dotmenu.svg";
import "./styles.css";
import { ReactComponent as ToDo } from "./icon/To-do.svg";
import { ReactComponent as InProgress } from "./icon/in-progress.svg";
import { ReactComponent as Done } from "./icon/Done.svg";
import { ReactComponent as Backlog } from "./icon/Backlog.svg";
import { ReactComponent as Cancelled } from "./icon/Cancelled.svg";
import { ReactComponent as LowPriority } from "./icon/Img-LowPriority.svg";

import { ReactComponent as HighPriority } from "./icon/Img-HighPriority.svg";
import { ReactComponent as MediumPriority } from "./icon/Img-MediumPriority.svg";

import { ReactComponent as UrgentPriorityColor } from "./icon/SVG-UrgentPrioritycolour.svg";
import { ReactComponent as UrgentPriorityGrey } from "./icon/SVG-UrgentPrioritygrey.svg";
import { ReactComponent as NoPriority } from "./icon/No-priority.svg";



const Column = ({ title, tickets }) => {
  var validTitles = ["No priority", "Todo", "In progress", "Done", "Cancelled", "Backlog", "Low", "Medium", "High", "Urgent", "No Priority"];
  return (
    <div className="column">
      <div className="column-title">
      
        <div className="column-left">

        {!validTitles.includes(title) && ( 
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=random"
              alt="User avatar"
              className="user-avatar"
              width={10}
              height={10}
            />
          )}
           
          {title === "Todo" && <span className="status-icon"><ToDo/></span>}
          {title === "In progress" && <span className="status-icon"><InProgress/></span>}
          {title === "Done" && <span className="status-icon"><Done/></span>}
          {title === "Cancelled" && <span className="status-icon"><Cancelled/></span>}
          {title === "Backlog" && <span className="status-icon"><Backlog/></span>}


          {title === "Low" && <span className="status-icon"><LowPriority/></span>}
          {title === "Medium" && <span className="status-icon"><MediumPriority/></span>}
          {title === "High" && <span className="status-icon"><HighPriority/></span>}
          {title === "Urgent" && <span className="status-icon"><UrgentPriorityColor/></span>}
          {title === "No priority" && <span className="status-icon"><NoPriority/></span>}


          {title}
          <div className="count">{tickets.length}</div>
        </div>

        <div className="column-right">
          
          <div className="add-threedots-icon">
            <Add className="add-icon" />
            <ThreeDots className="three-dots-icon" />
          </div>
        </div>
      </div>

      <div className="card-list">
        {tickets.map((ticket) => (
          <Card key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Column;
