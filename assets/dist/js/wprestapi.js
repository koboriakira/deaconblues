const POST = 'http://koboriakira.com/wp-json/wp/v2/posts';
const PER_PAGE = 5;

let getUrl = (href, page) => {
  return `${POST}?page=${page}&per_page=${PER_PAGE}`;
  // if (array.length == 7) {
  //   var postId = array.slice(-1)[0];
  //   URL = `${POST}/${postId}`;
  //   this.visible = false;
  // }
}

let addUkClasses = content => {
  const UK_CLASSES = [
    [/<ul/g, '<ul class="uk-list uk-list-bullet"'],
    [/<h2/g, '<h2 class="uk-heading-bullet uk-text-lead"'],
  ];
  return UK_CLASSES.reduce((prev, cur) => prev.replace(cur[0], cur[1]), content);
}

let extractData = datas => {
  return datas.map(data => {
    return {
      title: data.title.rendered,
      content: addUkClasses(data.content.rendered),
      date: data.date.slice(0, 10)
    };
  })
}

let getPosts = (page) => {
  return new Promise((resolve, reject) => {
    let url = getUrl(location.href, page);
    console.debug(url);
    (async () => {
      try {
        const res = await axios.get(url);
        resolve(extractData(res.data));
      } catch (e) {
        reject(e);
      }
    })();
  });
}
