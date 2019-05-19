import {
  RepositoryFactory
} from "@/assets/common/js/repositories/RepositoryFactory";

const CategoriesRepository = RepositoryFactory.get("categories");

class Categories {
  constructor() {
    this._data = [];
    this.inited = false;
  }

  async init() {
    if (this.inited) {
      return;
    }
    const res = await CategoriesRepository.get();
    console.info(`Categories.init()`);
    console.info(res.data);
    this._data = res.data;
    this.inited = true;

    // 既存のプロパティ属性と値の変更、および新しいプロパティの追加を防止
    Object.freeze(this);
  }

  isInited() {
    console.debug(`Categories.inited = ${this.inited}`)
    return this.inited;
  }

  getCategory(id) {
    const result = this._data.find(el => el.id === id);
    console.debug(`getCategory: ${id} -> ${result.name}`);
    return result;
  }

  getCategoryId(slug) {
    const category = this._data.find(el => el.slug === slug);
    return category.id;
  }

  add(item) {
    this._data.push(item);
  }

  get(id) {
    return this._data.find(d => d.id === id);
  }
}

const categoriesInstance = new Categories();
export default categoriesInstance;
