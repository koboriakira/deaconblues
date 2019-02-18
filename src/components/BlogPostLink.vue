<template>
  <div>
    <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:post="post"/>
  </div>
</template>

<script>
import BlogPost from "./BlogPost.vue";
export default {
  name: "blog-post-list",
  components: {
    BlogPost
  },
  props: ["posts"]
};
</script>
