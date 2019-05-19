<template>
  <div>
    <BlogPostLink :posts="posts"/>
    <NextArticlesLoad :state="buttonState" v-on:load="loadNewArticles"/>
  </div>
</template>

<script>
import BlogPostLink from "./BlogPostLink.vue";
import NextArticlesLoad from "./NextArticlesLoad.vue";
import { RepositoryFactory } from "@/assets/common/js/repositories/RepositoryFactory";
import Categories from "@/assets/common/js/singleton/categories";
import convertPosts from "@/assets/common/js/ConvertPosts";

const PostsRepository = RepositoryFactory.get("posts");

export default {
  name: "CategoryPosts",
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
      console.info(this.$route.params.childSlug);
      const categoryId = Categories.getCategoryId(this.$route.params.childSlug);
      const res = await PostsRepository.getInCategory(this.page, categoryId);
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
