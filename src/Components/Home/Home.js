import React, { useEffect, useState } from "react";

import VoluntaryJob from "../VoluntaryJob/VoluntaryJob";

import "./Home.css";
function Home() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://blooming-garden-44897.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="home">
      <h1>I Grow By Helping People In Need.</h1>
      <div className="home__input">
        <input type="text" />
        <button className="btn  btn-primary">Search</button>
      </div>
      <div className="row home__voluntaryJobs">
        {jobs.map((job) => (
          <VoluntaryJob name={job.name} image={job.image} />
        ))}
      </div>
    </div>
  );
}

export default Home;
