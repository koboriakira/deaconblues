const URL_CATEGORIES_API = 'http://' + location.host + '/wp-json/wp/v2/categories';

let categories;
(() => {
   callAxios(URL_CATEGORIES_API)
      .then(res => categories = res.data);
})();

let getCategory = id => {
   return categories.find(el => el.id === id);
};

let getCategoryId = slug => {
   let category = categories.find(el => el.slug === slug);
   return category.id;
};
