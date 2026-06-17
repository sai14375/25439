import { useState } from "react";

function App() {
  const [notifications] = useState([
    {
      id: 1,
      type: "Placement",
      title: "TCS Hiring",
      timestamp: "2026-06-17T09:00:00",
      read: false,
    },
    {
      id: 2,
      type: "Result",
      title: "Semester Result Published",
      timestamp: "2026-06-17T08:00:00",
      read: false,
    },
    {
      id: 3,
      type: "Event",
      title: "Tech Fest",
      timestamp: "2026-06-16T12:00:00",
      read: false,
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Priority Inbox</h1>

      {notifications.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{item.title}</h3>
          <p>Type: {item.type}</p>
          <p>{item.timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
