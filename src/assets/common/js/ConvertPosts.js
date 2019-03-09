import Categories from './categories.js';
import Tags from './tags.js';

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

export default function (datas) {
  console.info("convertPosts.");
  return datas.map(data => {
    return {
      id: data.id,
      title: data.title.rendered,
      content: addUkClasses(data.content.rendered),
      date: data.date.slice(0, 10),
      category: Categories.getCategory(data.categories[0]),
      tags: Tags.getTags(data.tags),
      link: data.link
    };
  });
}
