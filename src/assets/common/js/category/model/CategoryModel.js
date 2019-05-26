// カテゴリモデル

export default class {
  constructor(data) {
    // カテゴリID
    this.id = data.id
    // スラッグ
    this.slug = data.slug
    // カテゴリ名
    this.name = data.name
    // リンク
    this.link = data.link
  }
}
