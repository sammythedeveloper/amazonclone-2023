import axios from "axios";
const instance = axios.create({
  baseURL:"https://amazon-backend-b432.onrender.com"

});
export default instance;

