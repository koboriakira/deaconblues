import Repository from './Repository';

const resource = `/categories`;

export default {
  get() {
    console.info("[CategoriesRepository#get] start");
    const res = Repository.get(`${resource}?per_page=20`);
    console.info("[CategoriesRepository#get] end");
    return res;
  }
}
