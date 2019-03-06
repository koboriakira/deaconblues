<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <!-- <next-articles-load v-bind:state="buttonState" v-on:load="loadNewArticles()"></next-articles-load> -->
  </div>
</template>

<script>
import BlogPostLink from "./BlogPostLink.vue";
import axios from "axios";

const POST = "http://koboriakira.com/wp-json/wp/v2/posts";
const PER_PAGE = 3;

const URL_CATEGORIES_API =
  "http://" + location.host + "/wp-json/wp/v2/categories";

let trimLastSlash = url => (url.slice(-1) === "/" ? url.slice(0, -1) : url);

let trimProtocol = () => location.href.split("//")[1];

let getDomain = () => trimProtocol(trimLastSlash(location.href)).split("/")[0];

let isCategory = () =>
  trimProtocol(trimLastSlash(location.href)).split("/")[1] === "category";

let getPostId = () => trimProtocol(trimLastSlash(location.href)).split("/")[4];

let isSingle = () => getPostId(location.href) !== undefined;

let getCategorySlug = () =>
  trimProtocol(trimLastSlash(location.href))
    .split("/")
    .slice(-1)[0];

let createParam = page => {
  const domain = getDomain();
  if (isCategory()) {
    let categoryId = getCategoryId(getCategorySlug());
    return {
      isCategory: true,
      url: `${POST}?page=${page}&per_page=${PER_PAGE}&categories=${categoryId}`
    };
  }

  return {
    url: `${POST}?page=${page}&per_page=${PER_PAGE}`
  };
};

let addUkClasses = content => {
  const UK_CLASSES = [
    [/<ul/g, '<ul class="uk-list uk-list-bullet"'],
    [/<h2/g, '<h2 class="uk-heading-bullet uk-text-lead"']
  ];
  return UK_CLASSES.reduce(
    (prev, cur) => prev.replace(cur[0], cur[1]),
    content
  );
};

let extractData = datas => {
  return datas.map(data => {
    return {
      id: data.id,
      title: data.title.rendered,
      content: addUkClasses(data.content.rendered),
      date: data.date.slice(0, 10),
      // category: getCategory(data.categories[0]),
      // tags: getTags(data.tags),
      link: data.link
    };
  });
};

let initMetaInfoIfNeed = async () => {
  if (tags === undefined) {
    await fetchTags();
  }
  if (categories === undefined) {
    await fetchCategories();
  }
};

let callAxios = url => {
  console.info(`Fetch '${url}'`);
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const res = await axios.get(url);
        console.debug(res);
        resolve(res);
      } catch (e) {
        reject(e);
      }
    })();
  });
};

let getPosts = async param => {
  // await initMetaInfoIfNeed();
  const domain = getDomain();
  return new Promise((resolve, reject) => {
    callAxios(`${POST}?page=${param.page}&per_page=${PER_PAGE}`).then(
      res => {
        resolve(extractData(res.data));
      },
      error => {
        reject(error);
      }
    );
  });
};

let getLastCategorySlug = param => {
  if (param.category.third !== undefined) return param.category.third;
  if (param.category.second !== undefined) return param.category.second;
  if (param.category.first !== undefined) return param.category.first;
  throw new Error("Not found category slug.");
};

let getCategoryPosts = async param => {
  await initMetaInfoIfNeed();
  console.debug(categories);
  const slug = getLastCategorySlug(param);
  let categoryId = getCategoryId(slug);
  return new Promise((resolve, reject) => {
    callAxios(
      `${POST}?page=${param.page}&per_page=${PER_PAGE}&categories=${categoryId}`
    ).then(
      res => {
        resolve(extractData(res.data));
      },
      error => {
        reject(error);
      }
    );
  });
};

let getTagPosts = async param => {
  await initMetaInfoIfNeed();
  return new Promise((resolve, reject) => {
    callAxios(
      `${POST}?page=${param.page}&per_page=${PER_PAGE}&tags=${param.tagId}`
    ).then(
      res => {
        resolve(extractData(res.data));
      },
      error => {
        reject(error);
      }
    );
  });
};

let getSinglePost = async postId => {
  await initMetaInfoIfNeed();
  return new Promise((resolve, reject) => {
    callAxios(`${POST}/${postId}`).then(
      res => {
        resolve(extractData([res.data]));
      },
      error => {
        reject(error);
      }
    );
  });
};

export default {
  name: "DefaultPosts",
  components: {
    BlogPostLink
  },
  data() {
    return {
      posts: [],
      page: 0,
      buttonState: {
        loading: false,
        disabled: false
      }
    };
  },
  created() {
    console.debug("DefaultPosts is created.");
    this.page++;
    let param = { page: this.page };
    getPosts(param).then(datas => (this.posts = this.posts.concat(datas)));
  },
  mounted() {
    console.debug("DefaultPosts is mounted.");
  },
  updated() {
    console.debug("DefaultPosts is updated.");
  }
};
</script>
