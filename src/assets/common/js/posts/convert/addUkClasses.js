// エントリ内のHTMLにUIkitのclassを付与する

const UK_CLASSES = [
  [/<ul/g, '<ul class="uk-list uk-list-bullet"'],
  [/<h2/g, '<h2 class="uk-heading-bullet uk-text-lead"'],
  [/<blockquote><p>/g, `
  <blockquote
    class="uk-background-muted uk-padding"
    style="line-height: 1.9rem;">
    <p><span uk-icon="icon: quote-right"></span></p>
    <p>`]
];

export default function (content) {
  return UK_CLASSES.reduce(
    (prev, cur) => prev.replace(cur[0], cur[1]),
    content
  );
}
