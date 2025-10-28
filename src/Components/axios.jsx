import axios from "axios";
const instance = axios.create({
  baseURL:"https://amazon-backend-b432.onrender.com"
  // baseURL: "http://localhost:5000",

});
export default instance;

