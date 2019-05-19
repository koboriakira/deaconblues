import Categories from './singleton/categories.js';
import Tags from './singleton/tags.js';

const addUkClasses = content => {
  const UK_CLASSES = [
    [/<ul/g, '<ul class="uk-list uk-list-bullet"'],
    [/<h2/g, '<h2 class="uk-heading-bullet uk-text-lead"']
  ];
  return UK_CLASSES.reduce(
    (prev, cur) => prev.replace(cur[0], cur[1]),
    content
  );
};

export default function (data) {
  return {
    id: data.id,
    title: data.title.rendered,
    excerpt: data.excerpt.rendered,
    content: addUkClasses(data.content.rendered),
    date: data.date.slice(0, 10),
    category: Categories.getCategory(data.categories[0]),
    tags: Tags.getTags(data.tags),
    link: data.link
  };
}
