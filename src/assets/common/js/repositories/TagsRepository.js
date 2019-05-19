import Repository from './Repository';

const resource = `/tags?per_page=100`;

export default {
  get() {
    console.info("[TagsRepository#get] start");
    const res = Repository.get(`${resource}`);
    console.info("[TagsRepository#get] end");
    return res;
  }
}
