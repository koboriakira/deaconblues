<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <NextArticlesLoad :state="buttonState" v-on:load="loadNewArticles"/>
  </div>
</template>

<script>
import BlogPostLink from "./BlogPostLink.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";

import fetchPostsInCategory from "@/assets/common/js/posts/fetch/fetchPostsInCategory";
import convertPosts from "@/assets/common/js/posts/convert/ConvertPosts";

export default {
  name: "CategoryPosts",
  components: {
    BlogPostLink,
    NextArticlesLoad
  },
  props: ["childSlug"],
  data() {
    return {
      posts: [],
      page: 0,
      buttonState: {
        loading: false,
        disabled: false
      },
      categoryName: this.childSlug
    };
  },
  methods: {
    loadNewArticles: async function() {
      console.debug("loadNewArticles");
      this.buttonState.loading = true;
      this.page++;
      console.info(`childSlug: ${this.categoryName}`);
      const res = await fetchPostsInCategory(this.categoryName, this.page);

      console.info(res.data);
      this.posts = this.posts.concat(convertPosts(res.data));
      this.buttonState.loading = false;
    }
  },
  created() {
    console.debug("CategoryPosts is created.");
    this.loadNewArticles();
  },
  mounted() {
    console.debug("CategoryPosts is mounted.");
  },
  updated() {
    console.debug("CategoryPosts is updated.");
  }
};
</script>
