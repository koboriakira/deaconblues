<template>
  <div>
    <Loading v-show="!existsPost"/>
    <BlogPost v-if="existsPost" :post="post"/>
  </div>
</template>

<script>
import Loading from "./Loading.vue";
import BlogPost from "./BlogPost.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";
import { RepositoryFactory } from "@/assets/common/js/repositories/RepositoryFactory";
import Categories from "@/assets/common/js/singleton/categories";
import Tags from "@/assets/common/js/singleton/tags";
import convertPost from "@/assets/common/js/ConvertPost";
import UIkit from "uikit";

const PostsRepository = RepositoryFactory.get("posts");

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
      const res = await PostsRepository.getSinglePost(
        this.$route.params.postId
      ).catch(() => {
        console.warn("error!!!!!");
        // components can be called from the imported UIkit reference
        UIkit.notification("ポストを読み込めませんでした。");
        return;
      });
      console.info(res.data);

      const convertAfterAllAPIexecuted = () => {
        if (Categories.isInited() && Tags.isInited()) {
          this.post = convertPost(res.data);
          return;
        }
        console.info("wait until all API executed.");
        setTimeout(convertAfterAllAPIexecuted, 100);
      };

      convertAfterAllAPIexecuted();
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
