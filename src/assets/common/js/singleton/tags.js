import {
  RepositoryFactory
} from "@/assets/common/js/repositories/RepositoryFactory";

const TagsRepository = RepositoryFactory.get("tags");
const NOT_INITED = -1;
const INITING = 0;
const INITED = 1;
class Tags {
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
    const res = await TagsRepository.get();
    console.info(`Tags.init()`);
    console.info(res.data);
    if (this.inited == INITING) {
      this._data = res.data;
      this.inited = INITED;
    }

    // 既存のプロパティ属性と値の変更、および新しいプロパティの追加を防止
    Object.freeze(this);
  }

  isInited() {
    console.debug(`Tags.inited = ${this.inited}`);
    return this.inited;
  }

  getTags(tagIdList) {
    const result = this._data.filter(tag => tagIdList.indexOf(tag.id) > -1);
    console.debug(`getTags: ${tagIdList} -> ${result}`);
    return result;
  }

  getTagId(tagSlug) {
    const result = this._data.filter(tag => tag.slug === tagSlug)[0].id;
    console.debug(`getTagId: ${tagSlug} -> ${result}`)
    return result;
  }
}

const singleton = new Tags();
export default singleton;
