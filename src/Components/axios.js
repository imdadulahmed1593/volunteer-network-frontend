import axios from "axios";

const instance = axios.create({
  baseURL: "https://blooming-garden-44897.herokuapp.com", //the api (cloud function) url
});

export default instance;

// firebase emulators:start
// baseURL: "https://blooming-garden-44897.herokuapp.com",
// "https://localhost:9000"
