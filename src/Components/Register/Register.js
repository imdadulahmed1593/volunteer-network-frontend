import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import axios from "../axios";
import "./Register.css";
function Register() {
  let history = useHistory();
  const [activity, setActivity] = useState({
    description: "",
    datePicked: "",
  });
  console.log(activity);
  const [{ user, activities }, dispatch] = useStateValue();
  console.log(activities);
  const handleRegistration = async (e) => {
    e.preventDefault();

    await axios.post("/activities/new", {
      name: activities[activities.length - 1]?.activityName,
      userName: user?.name,
      description: activity.description,
      datePicked: activity.datePicked,

      image: activities[activities.length - 1]?.activityImg,
    });

    history.push("/events");
  };

  // const [jobs, setJobs] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:9000/jobs")
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data));
  // }, []);
  return (
    <div className="register">
      <img src={require("../../images/logos/mainlogo.png")} alt="" />

      <form>
        <h2>Register as a volunteer</h2>
        <input type="text" placeholder="Full Name" defaultValue={user?.name} />
        <input
          type="text"
          placeholder="Username or Email"
          defaultValue={user?.email}
        />
        <input
          type="text"
          onFocus={(e) => (e.target.type = "date")}
          onChange={(e) =>
            setActivity({ ...activity, datePicked: e.target.value })
          }
          placeholder="Pick a Date"
        />
        <input
          type="text"
          onChange={(e) =>
            setActivity({ ...activity, description: e.target.value })
          }
          placeholder="Description"
          value={user.description}
        />

        <input
          type="text"
          placeholder="What do you want to do?"
          value={activities[activities.length - 1]?.activityName}
        />

        <button onClick={handleRegistration} className="btn btn-lg btn-primary">
          Register as a volunteer
        </button>
      </form>
    </div>
  );
}

export default Register;
