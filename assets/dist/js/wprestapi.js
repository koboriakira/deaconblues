const POST = 'http://koboriakira.com/wp-json/wp/v2/posts';
const PER_PAGE = 3;

let trimLastSlash = href => href.slice(-1) === '/' ? href.slice(0, -1) : href;

let isCategory = url => url.split('//')[1].split('/')[1] === 'category';

let getCategorySlug = url => url.split('//')[1].split('/')[2];

let getUrl = (url, page) => {
  trimedUrl = trimLastSlash(url);
  if (isCategory(trimedUrl)) {
    console.log('category!!!');
    let categoryId = getCategoryId(getCategorySlug(url));
    return `${POST}?page=${page}&per_page=${PER_PAGE}&categories=${categoryId}`
  }
  console.log(url);
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
      date: data.date.slice(0, 10),
      category: getCategory(data.categories[0]),
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
