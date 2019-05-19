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

  getInTag(page, tagId) {
    console.info("[PostRepository#getInTag] start");
    const res = Repository.get(`${resource}?${perPage}&page=${page}&tags=${tagId}`);
    console.info("[PostRepository#getInTag] end");
    return res;
  },

  getSinglePost(postId) {
    console.info("[PostRepository#getSinglePost] start");
    const res = Repository.get(`${resource}/${postId}`);
    console.info("[PostRepository#getSinglePost] end");
    return res;
  }
}
