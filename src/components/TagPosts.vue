<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <NextArticlesLoad :state="buttonState" v-on:load="loadNewArticles"/>
  </div>
</template>

<script>
import BlogPostLink from "./BlogPostLink.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";

import fetchPostsInTag from "@/assets/common/js/posts/fetch/fetchPostsInTag";
import convertPosts from "@/assets/common/js/posts/convert/ConvertPosts";

import UIkit from "uikit";

export default {
  name: "TagPosts",
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
      const res = await fetchPostsInTag(this.$route.params.tagId, this.page);

      console.info(res.data);
      this.posts = this.posts.concat(convertPosts(res.data));
      this.buttonState.loading = false;
    }
  },
  created() {
    console.debug("TagPosts is created.");
    this.loadNewArticles();
  },
  mounted() {
    console.debug("TagPosts is mounted.");
  },
  updated() {
    console.debug("TagPosts is updated.");
  }
};
</script>
