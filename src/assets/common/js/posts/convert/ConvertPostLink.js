import PostLinkModel from '@/assets/common/js/posts/model/PostLinkModel'

export default function (datas) {
  console.info("convertPostLink.");
  return datas.map(data => new PostLinkModel(data));
}
