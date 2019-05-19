import {
  RepositoryFactory
} from "@/assets/common/js/repositories/RepositoryFactory";

const TagsRepository = RepositoryFactory.get("tags");

class Tags {
  constructor() {
    this._data = [];
    this.inited = 0;
  }

  async init() {
    this.inited = 1;
    console.info(`Tags.init()`);
    const res = await TagsRepository.get();
    console.debug(res.data);
    this._data = res.data;
    this.inited = 2;

    // 既存のプロパティ属性と値の変更、および新しいプロパティの追加を防止
    Object.freeze(this);
  }

  isInited() {
    console.debug(`Tags.inited = ${this.inited}`);
    return this.inited === 2;
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
