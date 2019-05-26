import {
  RepositoryFactory
} from "@/assets/common/js/repositories/RepositoryFactory";
import Categories from "@/assets/common/js/singleton/categories";
import Tags from "@/assets/common/js/singleton/tags"

const PostsRepository = RepositoryFactory.get("posts");

export default async function (categoryName, page) {
  await Categories.init();
  const categoryId = Categories.getCategoryId(categoryName);
  const res = await Promise.all([Tags.init(), PostsRepository.getInCategory(page, categoryId)]).then(res => {
    return res[1];
  });
  return res;
}
