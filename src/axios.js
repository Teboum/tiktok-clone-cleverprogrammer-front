import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktokclonecleverprogrammer.herokuapp.com/",
});
export default instance;
