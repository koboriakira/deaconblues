import Repository from './Repository';

const perPage = "per_page=3";
const resource = `/posts`;

export default {
  get(page) {
    console.info("[PostRepository#get] start");
    const res = Repository.get(`${resource}?${perPage}&page=${page}`);
    console.info("[PostRepository#get] end");
    return res
  },

  getInCategory(page, categoryId) {
    console.info("[PostRepository#getInCategory] start");
    const res = Repository.get(`${resource}?${perPage}&page=${page}&categories=${categoryId}`);
    console.info("[PostRepository#getInCategory] end");
    return res
  },

  getListInCategory(page, categoryId) {
    console.info(`[PostRepository#getListInCategory] start[page=${page}, categoryId=${categoryId}]`);
    const res = Repository.get(`${resource}?per_page=100&page=${page}&categories=${categoryId}`);
    return res;
  },

  getInTag(page, tagId) {
    console.info("[PostRepository#getInTag] start");
    const res = Repository.get(`${resource}?${perPage}&page=${page}&tags=${tagId}`);
    console.info("[PostRepository#getInTag] end");
    return res;
  },

  getPostListInTag(page, tagId) {
    console.info(`[PostRepository#getPostListInTag] page=${page}, tagId=${tagId}`);
    const res = Repository.get(`${resource}?$per_page=100&page=${page}&tags=${tagId}`);
    return res;
  },

  getSinglePost(postId) {
    console.info("[PostRepository#getSinglePost] start");
    const res = Repository.get(`${resource}/${postId}`);
    console.info("[PostRepository#getSinglePost] end");
    return res;
  },

  search(page, word) {
    console.info(`[PostRepository#search] start. [page=${page}, word=${word}]`);
    const res = Repository.get(`${resource}?${perPage}&page=${page}&search=${word}`);
    console.info("[PostRepository#search] end");
    return res
  }
}
