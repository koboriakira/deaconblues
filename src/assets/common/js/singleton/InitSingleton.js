import Categories from "./categories";
import Tags from "./tags";

export default async function () {
  for (const singleton of [Categories, Tags]) {
    await singleton.init();
  }
}
