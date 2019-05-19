import Categories from "./categories";
import Tags from "./tags";

export default async function () {
  await Promise.all([Categories.init(), Tags.init()]);
}
