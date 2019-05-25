// エントリ内のHTMLにUIkitのclassを付与する

const UK_CLASSES = [
  [/<ul/g, '<ul class="uk-list uk-list-bullet"'],
  [/<h2/g, '<h2 class="uk-heading-bullet uk-text-lead"']
];

export default function (content) {
  return UK_CLASSES.reduce(
    (prev, cur) => prev.replace(cur[0], cur[1]),
    content
  );
}
