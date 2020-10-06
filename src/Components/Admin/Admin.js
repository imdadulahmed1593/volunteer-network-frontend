import React, { useEffect, useState } from "react";
import "./Admin.css";
import axios from "../axios";
import { useHistory } from "react-router-dom";
function Admin() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [toggle, setToggle] = useState(false);
  const [events, setEvents] = useState([]);
  const addEvent = (e) => {
    e.preventDefault();
    axios.post("/events/new", {
      title: title,
      description: description,
      date: date,
    });
    history.push("/adminEvents");
  };
  const deleteEvent = async (id) => {
    console.log(id);
    await axios.delete(`/delete/${id}`).then((response) => {
      console.log(response);
    });
    // history.push("/");
  };
  useEffect(() => {
    axios.get("/activities/all").then((res) => setEvents(res.data));
  }, [events]);

  return (
    <div className="admin">
      <div className="admin__left">
        <img src={require("../../images/logos/mainlogo.png")} alt="" />
        <p onClick={() => setToggle(false)}>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-people"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
            />
          </svg>
          Volunteer Register List
        </p>
        <p onClick={() => setToggle(true)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          Add Events
        </p>
      </div>

      <div className="admin__right">
        <h1>{!toggle ? "Volunteer Register List" : "Add Events"}</h1>
        {!toggle ? (
          <div className="volunteer__list">
            <div className="activity activity__header">
              <p>Volunteer name</p>
              <p>Activity</p>
              <p>Date Picked</p>
              <p>Description</p>
              <p>Action</p>
            </div>
            {events.map((activity) => (
              <div className="activity">
                <p>{activity.userName}</p>
                <p>{activity.name}</p>
                <p>{activity.datePicked}</p>
                <p>{activity.description}</p>
                <button
                  onClick={() => deleteEvent(`${activity._id}`)}
                  className="btn btn-sm btn-danger"
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <form action="" className="event__form">
            <div className="event__formInput">
              <p>Event Title</p>
              <input onChange={(e) => setTitle(e.target.value)} type="text" />
            </div>
            <div className="event__formInput">
              <p>Event date</p>
              <input onChange={(e) => setDate(e.target.value)} type="text" />
            </div>
            <div className="event__formInput">
              <p>Event Description</p>
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
              />
            </div>
            <div className="event__formInput">
              <p>Banner</p>
              <input type="file" />
            </div>
            <button onClick={addEvent} className="btn btn-primary">
              Add event
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Admin;
