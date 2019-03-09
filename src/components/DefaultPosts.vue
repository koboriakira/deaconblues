<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <NextArticlesLoad :state="buttonState" v-on:load="loadNewArticles"/>
  </div>
</template>

<script>
import BlogPostLink from "./BlogPostLink.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";
import getPosts from "@/assets/common/js/GetPosts";

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
      let param = { page: this.page };
      const datas = await getPosts(param);
      this.buttonState.loading = false;
      this.posts = this.posts.concat(datas);
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
