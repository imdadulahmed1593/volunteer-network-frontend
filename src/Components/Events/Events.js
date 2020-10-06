import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import "./Events.css";
import axios from "../axios";

function Events() {
  // const history = useHistory();
  const [{ user, activities }, dispatch] = useStateValue();
  const [events, setEvents] = useState([]);

  const deleteEvent = async (id) => {
    console.log(id);
    await axios.delete(`/delete/${id}`).then((response) => {
      console.log(response);
    });
    // history.push("/");
  };

  useEffect(() => {
    axios
      .get("/activities/sync?name=" + user.name)
      .then((res) => setEvents(res.data));
  }, [events]);

  return (
    <div className="container row events">
      {events.map((event) => (
        <div className="event col-md-6 col-sm-12">
          <div className="event__left">
            <img
              className="event__img"
              src={require(`../../images/images/${event.image}`)}
              alt={event.name}
            />
          </div>
          <div className="event__right">
            <h2>{event.name}</h2>
            <h3>{event.datePicked}</h3>
            <p>{event.userName}</p>
            <button
              onClick={() => deleteEvent(`${event._id}`)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Events;
// onClick={() => deleteEvent(`${event._id}`)}
//{require(`../../images/images/${event.image}`)}
