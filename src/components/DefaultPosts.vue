<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <!-- <next-articles-load v-bind:state="buttonState" v-on:load="loadNewArticles()"></next-articles-load> -->
  </div>
</template>

<script>
import axios from "axios";
import BlogPostLink from "./BlogPostLink.vue";

export default {
  name: "DefaultPosts",
  components: {
    BlogPostLink
  },
  data() {
    return {
      posts: ["a", "a", "a"],
      page: 0,
      buttonState: {
        loading: false,
        disabled: false
      }
    };
  }
};
</script>
