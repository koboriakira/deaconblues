<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <NextArticlesLoad :state="buttonState" v-on:load="loadNewArticles"/>
  </div>
</template>

<script>
import BlogPostLink from "./BlogPostLink.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";
import Categories from "@/assets/common/js/categories";
import Tags from "@/assets/common/js/tags";
import getPosts from "@/assets/common/js/GetPosts";
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
      let param = { page: this.page };
      const res = await getPosts(param);
      console.info(res);

      const convertAfterAllAPIexecuted = () => {
        if (Categories.isInited() && Tags.isInited()) {
          this.buttonState.loading = false;
          console.info(res.data);
          this.posts = this.posts.concat(convertPosts(res.data));
          return;
        }
        console.info("wait until all API executed.");
        setTimeout(convertAfterAllAPIexecuted, 100);
      };

      convertAfterAllAPIexecuted();
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
