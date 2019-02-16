const HTTP = 'http://'
const POST = '/wp-json/wp/v2/posts';
const PER_PAGE = 3;

let trimLastSlash = url => url.slice(-1) === '/' ? url.slice(0, -1) : url;

let trimProtocol = () => location.href.split('//')[1];

let getDomain = () => trimProtocol(trimLastSlash(location.href)).split('/')[0];

let isCategory = () => trimProtocol(trimLastSlash(location.href)).split('/')[1] === 'category';

let getPostId = () => trimProtocol(trimLastSlash(location.href)).split('/')[4];

let isSingle = () => getPostId(location.href) !== undefined;

let getCategorySlug = () => trimProtocol(trimLastSlash(location.href)).split('/').slice(-1)[0];

let createParam = page => {
  const domain = getDomain();

  if (isSingle()) {
    return {
      isSingle: true,
      url: `${HTTP}${domain}${POST}/${getPostId(location.href)}`,
    };
  }

  if (isCategory()) {
    let categoryId = getCategoryId(getCategorySlug());
    return {
      isCategory: true,
      url: `${HTTP}${domain}${POST}?page=${page}&per_page=${PER_PAGE}&categories=${categoryId}`,
    };
  }

  return {
    url: `${HTTP}${domain}${POST}?page=${page}&per_page=${PER_PAGE}`
  };
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
      link: data.link,
    };
  })
}

let callAxios = url => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await axios.get(url);
        console.log(res);
        resolve(res);
      } catch (e) {
        reject(e);
      }
    })();
  });
}

let getPosts = (requestParam) => {
  return new Promise((resolve, reject) => {
    console.log(requestParam.url);
    callAxios(requestParam.url)
      .then(res => {
        const data = requestParam.isSingle ? [res.data] : res.data;
        resolve(extractData(data));
      }, error => {
        reject(error);
      });
  })
}
