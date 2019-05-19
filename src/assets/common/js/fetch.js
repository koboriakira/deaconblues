import axios from "axios";

export default async function (url) {
  const start = Date.now();
  console.info(`Fetch "${url}"`);
  const res = await axios.get(url);
  const end = Date.now();
  console.info(`Finish fetching "${url}" ${end - start} ms`);
  return res;
}
