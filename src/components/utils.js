export const groupTickets = (tickets, grouping, users) => {
  const grouped = {};

  tickets.forEach((ticket) => {
    let groupKey;

    if (grouping === "status") {
      groupKey = ticket.status;
    } else if (grouping === "user") {
      groupKey = ticket.userId;
    } else if (grouping === "priority") {
      groupKey = ticket.priority.toString();
    }

    if (!grouped[groupKey]) {
      grouped[groupKey] = [];
    }

    grouped[groupKey].push(ticket);
  });

  return grouped;
};

export const sortTickets = (groupedTickets, sorting) => {
  const sorted = {};

  for (const group in groupedTickets) {
    sorted[group] = [...groupedTickets[group]];

    if (sorting === "priority") {
      sorted[group].sort((a, b) => b.priority - a.priority);
    } else if (sorting === "title") {
      sorted[group].sort((a, b) => a.title.localeCompare(b.title));
    }
  }

  return sorted;
};
