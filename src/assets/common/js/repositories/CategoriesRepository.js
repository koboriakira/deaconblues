import Repository from './Repository';

const resource = `/categories`;

export default {
  get() {
    console.info("[CategoriesRepository#get] start");
    const res = Repository.get(`${resource}`);
    console.info("[CategoriesRepository#get] end");
    return res;
  }
}
