const notifications = [
  {
    ID: "d146095a",
    Type: "Result",
    Message: "mid-sem",
    Timestamp: "2026-04-22 17:51:30"
  },
  {
    ID: "b283218f",
    Type: "Placement",
    Message: "CSX Corporation hiring",
    Timestamp: "2026-04-22 17:51:18"
  },
  {
    ID: "81589ada",
    Type: "Event",
    Message: "farewell",
    Timestamp: "2026-04-22 17:51:06"
  }
];

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1
};

const topNotifications = notifications.sort((a, b) => {
  const p = priority[b.Type] - priority[a.Type];

  if (p !== 0) return p;

  return new Date(b.Timestamp) - new Date(a.Timestamp);
});

console.table(topNotifications);