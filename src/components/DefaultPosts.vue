<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <NextArticlesLoad :state="buttonState" v-on:load="loadNewArticles"/>
  </div>
</template>

<script>
import BlogPostLink from "./BlogPostLink.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";

import fetchDefaultPosts from "@/assets/common/js/posts/fetch/fetchDefaultPosts";
import convertPosts from "@/assets/common/js/ConvertPosts";

export default {
  name: "DefaultPosts",
  components: {
    BlogPostLink,
    NextArticlesLoad
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
  methods: {
    loadNewArticles: async function() {
      console.debug("loadNewArticles");
      this.buttonState.loading = true;
      this.page++;
      const res = await fetchDefaultPosts(this.page);
      console.info(res);

      console.info(res.data);
      this.posts = this.posts.concat(convertPosts(res.data));
      this.buttonState.loading = false;
    }
  },
  created() {
    console.debug("DefaultPosts is created.");
    this.loadNewArticles();
  },
  mounted() {
    console.debug("DefaultPosts is mounted.");
  },
  updated() {
    console.debug("DefaultPosts is updated.");
  }
};
</script>
