require("dotenv").config();
import axios from "axios";

export default axios.create({
  baseURL: `https://dsagym.herokuapp.com/${process.env.API_KEY}/sdesheet`,
});
