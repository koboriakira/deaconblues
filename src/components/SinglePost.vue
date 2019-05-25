<template>
  <div>
    <Loading v-show="!existsPost"/>
    <BlogPost v-if="existsPost" :post="post" :isSingle="true"/>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import BlogPost from "./BlogPost.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";

import fetchSinglePost from "@/assets/common/js/posts/fetch/fetchSinglePost";
import PostModel from "@/assets/common/js/posts/model/PostModel";

import UIkit from "uikit";

export default {
  name: "SinglePost",
  components: {
    Loading,
    BlogPost
  },
  data() {
    return {
      post: undefined
    };
  },
  computed: {
    existsPost: function() {
      return this.post !== undefined;
    }
  },
  methods: {
    loadNewArticles: async function() {
      console.debug("loadNewArticles");
      let param = {
        postId: this.$route.params.postId
      };
      const res = await fetchSinglePost(this.$route.params.postId).catch(() => {
        console.warn("error!!!!!");
        // components can be called from the imported UIkit reference
        UIkit.notification("ポストを読み込めませんでした。");
        return;
      });
      console.info(res.data);
      this.post = new PostModel(res.data);
    }
  },
  created() {
    console.debug("SinglePost is created.");
    this.loadNewArticles();
  },
  mounted() {
    console.debug("SinglePost is mounted.");
  },
  updated() {
    console.debug("SinglePost is updated.");
  }
};
</script>
