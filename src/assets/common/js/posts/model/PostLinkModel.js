// リンク用のエントリモデル。IDとタイトルだけ

export default class {
  constructor(data) {
    // エントリID
    this.id = data.id
    // 題名
    this.title = data.title.rendered
  }
}
