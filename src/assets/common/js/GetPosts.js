import fetch from './fetch.js';

const POST = 'http://koboriakira.com/wp-json/wp/v2/posts';
const PER_PAGE = 3;

let trimLastSlash = url => (url.slice(-1) === '/' ? url.slice(0, -1) : url);

let trimProtocol = () => location.href.split('//')[1];

let getDomain = () => trimProtocol(trimLastSlash(location.href)).split('/')[0];

let isCategory = () =>
  trimProtocol(trimLastSlash(location.href)).split('/')[1] === 'category';

let getPostId = () => trimProtocol(trimLastSlash(location.href)).split('/')[4];

let isSingle = () => getPostId(location.href) !== undefined;

let getCategorySlug = () =>
  trimProtocol(trimLastSlash(location.href))
  .split('/')
  .slice(-1)[0];

let createParam = page => {
  const domain = getDomain();
  if (isCategory()) {
    let categoryId = getCategoryId(getCategorySlug());
    return {
      isCategory: true,
      url: `${POST}?page=${page}&per_page=${PER_PAGE}&categories=${categoryId}`
    };
  }

  return {
    url: `${POST}?page=${page}&per_page=${PER_PAGE}`
  };
};


let getLastCategorySlug = param => {
  if (param.category.third !== undefined) return param.category.third;
  if (param.category.second !== undefined) return param.category.second;
  if (param.category.first !== undefined) return param.category.first;
  throw new Error('Not found category slug.');
};

let getCategoryPosts = async param => {
  await initMetaInfoIfNeed();
  console.debug(categories);
  const slug = getLastCategorySlug(param);
  let categoryId = getCategoryId(slug);
  return new Promise((resolve, reject) => {
    callAxios(
      `${POST}?page=${param.page}&per_page=${PER_PAGE}&categories=${categoryId}`
    ).then(
      res => {
        resolve(extractData(res.data));
      },
      error => {
        reject(error);
      }
    );
  });
};

let getTagPosts = async param => {
  await initMetaInfoIfNeed();
  return new Promise((resolve, reject) => {
    callAxios(
      `${POST}?page=${param.page}&per_page=${PER_PAGE}&tags=${param.tagId}`
    ).then(
      res => {
        resolve(extractData(res.data));
      },
      error => {
        reject(error);
      }
    );
  });
};

let getSinglePost = async postId => {
  await initMetaInfoIfNeed();
  return new Promise((resolve, reject) => {
    callAxios(`${POST}/${postId}`).then(
      res => {
        resolve(extractData([res.data]));
      },
      error => {
        reject(error);
      }
    );
  });
};

const createUrl = param => {
  if (param.postId !== undefined) {
    return `${POST}/${param.postId}`;
  }
  if (param.categoryId !== undefined) {
    return `${POST}?page=${param.page}&per_page=${PER_PAGE}&categories=${param.categoryId}`
  }
  if (param.tagId !== undefined) {
    return `${POST}?page=${param.page}&per_page=${PER_PAGE}&tags=${param.tagId}`
  }
  return `${POST}?page=${param.page}&per_page=${PER_PAGE}`;
}

export default async function (param) {
  const url = createUrl(param);
  const res = await fetch(url);
  return res;
}
