// タグモデル

export default class {
  constructor(data) {
    // タグID
    this.id = +data.id
    // スラッグ
    this.slug = data.slug
    // カテゴリ名
    this.name = data.name
    // リンク
    this.link = data.link
  }
}
