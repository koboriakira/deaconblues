import {
  RepositoryFactory
} from "@/assets/common/js/repositories/RepositoryFactory";
import CategoryModel from "../category/model/CategoryModel";

const CategoriesRepository = RepositoryFactory.get("categories");

const NOT_INITED = -1;
const INITING = 0;
const INITED = 1;

class Categories {
  constructor() {
    this._data = [];
    this.inited = NOT_INITED;
  }

  async init() {
    if (this.inited == INITED) {
      return;
    }

    if (this.inited == NOT_INITED) {
      this.inited = INITING;
    }

    const res = await CategoriesRepository.get();
    console.info(`Categories.init()`);
    console.debug("Show all categories");
    console.dir(res.data);
    if (this.inited == INITING) {
      this._data = res.data.map(el => new CategoryModel(el));
      this.inited = INITED;
    }

    // 既存のプロパティ属性と値の変更、および新しいプロパティの追加を防止
    Object.freeze(this);
  }

  isInited() {
    return this.inited === INITED;
  }

  getCategory(id) {
    const result = this._data.find(el => el.id === id);
    if (result == undefined) {
      return "";
    }
    console.debug(`getCategory: ${id} -> ${result.name}`);
    return result;
  }

  getCategoryId(slug) {
    const category = this._data.find(el => el.slug === slug);
    return category.id;
  }

  getCategoryFromSlug(slug) {
    const category = this._data.find(el => el.slug === slug);
    console.info("getCategoryFromSlug");
    console.dir(category);
    return category;
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
