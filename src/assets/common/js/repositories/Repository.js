import axios from "axios";

const baseDomain = "http://koboriakira.com";
// const baseDomain = "http://localhost:8080";

const baseURL = `${baseDomain}/wp-json/wp/v2`;

export default axios.create({
  baseURL
});
