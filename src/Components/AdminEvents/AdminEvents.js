import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./AdminEvents.css";
import axios from "../axios";
function AdminEvents() {
  const [events, setEvents] = useState([]);
  console.log(events);
  useEffect(() => {
    axios.get("/events/all").then((res) => setEvents(res.data));
  }, []);
  return (
    <div className="adminEvents">
      <img src={require("../../images/logos/mainlogo.png")} alt="" />
      {events.map((event) => (
        <div className="event_box">
          <h1>{event.title}</h1>
          <h2>{event.date}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AdminEvents;
