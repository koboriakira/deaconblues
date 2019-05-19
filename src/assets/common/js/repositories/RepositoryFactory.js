import PostsRepository from './postsRepository';
import CategoriesRepository from './CategoriesRepository';
import TagsRepository from './TagsRepository';

const repositories = {
  posts: PostsRepository,
  categories: CategoriesRepository,
  tags: TagsRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
}
