import axios from "axios";
require("dotenv").config();

export default axios.create({
  baseURL: `https://dsagym.herokuapp.com/${process.env.API_KEY}`,
});
