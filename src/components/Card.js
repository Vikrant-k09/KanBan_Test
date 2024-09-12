import React from "react";
import "./styles.css";

import { ReactComponent as ThreeDotMenu } from "./icon/3dotmenu.svg";
import { ReactComponent as HighPriority } from "./icon/Img-HighPriority.svg";
import { ReactComponent as MediumPriority } from "./icon/Img-MediumPriority.svg";
import { ReactComponent as LowPriority } from "./icon/Img-LowPriority.svg";
import { ReactComponent as UrgentPriorityColor } from "./icon/SVG-UrgentPrioritycolour.svg";
import { ReactComponent as UrgentPriorityGrey } from "./icon/SVG-UrgentPrioritygrey.svg";



import { ReactComponent as ToDo } from "./icon/To-do.svg";
import { ReactComponent as InProgress } from "./icon/in-progress.svg";
import { ReactComponent as Done } from "./icon/Done.svg";
import { ReactComponent as Backlog } from "./icon/Backlog.svg";
import { ReactComponent as Cancelled } from "./icon/Cancelled.svg";


const Card = ({ ticket }) => {
  const priorityClass = `priority-${ticket.priority}`;
  let PriorityIcon;

  switch (ticket.priority) {
    case 4:
      PriorityIcon = UrgentPriorityColor;
      break;
    case 3:
      PriorityIcon = HighPriority;
      break;
    case 2:
      PriorityIcon = MediumPriority;
      break;
    case 1:
      PriorityIcon = LowPriority;
      break;
    case 0:
      PriorityIcon = UrgentPriorityGrey;
      break;
    default:
      PriorityIcon = null;
  }

  return (
    <div className={`card ${priorityClass}`}>
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        <div className="card-options">
          <div className="image">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&background=random"
              alt="User avatar"
              className="user-avatar"
               width={12}
               height={12}
            />
          </div>
        </div>
      </div>
      <div className="ticket-container-unique">
        <div className="left-ticket">
          {ticket.status === "Todo" && <span className="status-icon"><ToDo/></span>}
          {ticket.status === "In progress" && <span className="status-icon"><InProgress/></span>}
          {ticket.status === "Done" && <span className="status-icon"><Done/></span>}
          {ticket.status === "Cancelled" && <span className="status-icon"><Cancelled/></span>}
          {ticket.status === "Backlog" && <span className="status-icon"><Backlog/></span>}
        </div>
        <div className="right-ticket">
          <h3 className="card-title">{ticket.title}</h3>
        </div>
      </div>

      <div className="card-tag-container-container">
        <div className="priority-icon">
          {PriorityIcon && (
            <PriorityIcon
              className="card-priority-icon"
              preserveAspectRatio="xMidYMid meet"
            />
          )}
        </div>
        <div className="card-tag-container">
          {ticket.tag.map((tag, index) => (
            <div class="tag-container-div">
              <span key={index} className="card-tag">
                <div class="circle"></div>
                <div class="text">{tag}</div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
