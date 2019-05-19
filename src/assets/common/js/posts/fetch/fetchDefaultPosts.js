import {
      RepositoryFactory
} from "@/assets/common/js/repositories/RepositoryFactory";
import Categories from "@/assets/common/js/singleton/categories";
import Tags from "@/assets/common/js/singleton/tags"

const PostsRepository = RepositoryFactory.get("posts");

export default async function (page) {
      const res = await Promise.all([Categories.init(), Tags.init(), PostsRepository.get(page)]).then(res => {
            return res[2];
      });
      return res;
}
