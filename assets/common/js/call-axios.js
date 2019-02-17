let callAxios = url => {
  console.info(`Fetch '${url}'`);
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await axios.get(url);
        console.debug(res);
        resolve(res);
      } catch (e) {
        reject(e);
      }
    })();
  });
}
