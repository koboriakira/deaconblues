<template>
  <div>
    <PostList :posts="posts" :filterName="filterName"/>
  </div>
</template>

<script>
import PostList from "./PostList.vue";

import fetchPostListInCategory from "@/assets/common/js/posts/fetch/fetchPostListInCategory";
import convertPostLink from "@/assets/common/js/posts/convert/ConvertPostLink";
import Categories from "@/assets/common/js/singleton/categories";

export default {
  name: "CategoryPostList",
  components: { PostList },
  props: ["childSlug"],
  data() {
    return {
      posts: [],
      page: 0,
      buttonState: {
        loading: false,
        disabled: false
      },
      filterName: ""
    };
  },
  methods: {
    loadNewArticles: async function() {
      console.debug("loadNewArticles");
      this.buttonState.loading = true;
      this.page++;
      const res = await fetchPostListInCategory(this.childSlug, this.page);
      this.category = Categories.getCategoryFromSlug(this.childSlug);
      this.filterName = `「${this.category.name}」カテゴリ`;

      this.posts = this.posts.concat(convertPostLink(res.data));
      this.buttonState.loading = false;
    }
  },
  created() {
    console.debug("CategoryPostList is created.");
    this.loadNewArticles();
  },
  mounted() {
    console.debug("CategoryPostList is mounted.");
  },
  updated() {
    console.debug("CategoryPostList is updated.");
  }
};
</script>
