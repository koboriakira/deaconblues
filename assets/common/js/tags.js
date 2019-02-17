const URL_TAGS_API = 'http://' + location.host + '/wp-json/wp/v2/tags?per_page=100';
var tags;

let fetchTags = async () => {
  await callAxios(URL_TAGS_API)
    .then(res => tags = res.data);
}

let getTags = (tagIdList) => {
  return tags.filter(tag => tagIdList.indexOf(tag.id) > -1);
}

let getTagId = (tagSlug) => {
  console.log(tags);
  return tags.filter(tag => tag.slug === tagSlug)[0].id;
}
