import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "50c4753892c3464da05639f0f3df3edf",
  },
});
