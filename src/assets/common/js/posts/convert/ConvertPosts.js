import PostModel from '@/assets/common/js/posts/model/PostModel'

export default function (datas) {
  console.info("convertPosts.");
  return datas.map(data => new PostModel(data));
}
