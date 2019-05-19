import convertPost from './ConvertPost.js';
import Categories from "@/assets/common/js/singleton/categories";
import Tags from "@/assets/common/js/singleton/tags";

const convertAfterAllAPIexecuted = () => {
  if (Categories.isInited() && Tags.isInited()) {
    return;
  }
  console.info("wait until all API execute.");
  setTimeout(convertAfterAllAPIexecuted, 100);
};

export default function (datas) {
  console.info("convertPosts.");
  convertAfterAllAPIexecuted();
  return datas.map(data => convertPost(data));
}
