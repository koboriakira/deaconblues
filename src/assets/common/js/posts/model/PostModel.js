// エントリモデル

import addUkClasses from '@/assets/common/js/posts/convert/addUkClasses'
import Categories from "@/assets/common/js/singleton/categories";
import Tags from "@/assets/common/js/singleton/tags"

export default class {
  constructor(data) {
    // エントリID
    this.id = data.id,
      // 題名
      this.title = data.title.rendered,
      // 要約
      this.excerpt = data.excerpt.rendered,
      // 内容
      this.content = addUkClasses(data.content.rendered),
      // 投稿日
      this.date = data.date.slice(0, 10),
      // カテゴリ
      this.category = Categories.getCategory(data.categories[0]),
      // タグ
      this.tags = Tags.getTags(data.tags),
      // エントリURL
      this.link = data.link
  }
}
