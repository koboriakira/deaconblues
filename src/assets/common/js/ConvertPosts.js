import convertPost from './ConvertPost.js';

export default function (datas) {
  console.info("convertPosts.");
  return datas.map(data => convertPost(data));
}
