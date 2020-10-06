import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "./VoluntaryJob.css";
function VoluntaryJob({ name, image }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Link
      to="/register"
      onClick={(e) =>
        dispatch({
          type: "SET_ACTIVITY",
          activity: {
            activityName: name,
            activityImg: image,
          },
        })
      }
      className="col-sm-6 col-md-3  voluntaryJob"
    >
      <img src={require(`../../images/images/${image}`)} alt={name} />{" "}
      <p>{name}</p>
    </Link>
  );
}

export default VoluntaryJob;
