<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <NextArticlesLoad :state="buttonState" v-on:load="loadNewArticles"/>
  </div>
</template>

<script>
import BlogPostLink from "./BlogPostLink.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";

import fetchSearchedPosts from "@/assets/common/js/posts/fetch/fetchSearchedPosts";
import convertPosts from "@/assets/common/js/posts/convert/ConvertPosts";

export default {
  name: "SearchPosts",
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
  watch: {
    $route: function(to, from) {
      if (to.path !== from.path) {
        console.info(`to: ${to}, from:${from}`);
        this.clear();
        this.loadNewArticles();
      }
    }
  },
  methods: {
    loadNewArticles: async function() {
      console.debug("loadNewArticles");
      this.buttonState.loading = true;
      this.page++;
      const word = this.$route.params.word.replace("?", "");
      const res = await fetchSearchedPosts(this.page, word);
      console.info(res);

      console.info(res.data);
      this.posts = this.posts.concat(convertPosts(res.data));
      this.buttonState.loading = false;
    },
    clear: function() {
      this.posts = [];
      this.page = 0;
      this.buttonState.loading = false;
      this.buttonState.disabled = false;
    }
  },
  created() {
    console.debug("SearchPosts is created.");
    this.loadNewArticles();
  },
  mounted() {
    console.debug("SearchPosts is mounted.");
  },
  updated() {
    console.debug("SearchPosts is updated.");
    // this.loadNewArticles();
  }
};
</script>
