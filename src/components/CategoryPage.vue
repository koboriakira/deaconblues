<template>
  <div>
    <CategoryPosts :childSlug="childSlug"/>
  </div>
</template>

<script>
import CategoryPosts from "./CategoryPosts.vue";

export default {
  name: "CategoryPage",
  components: {
    CategoryPosts
  },
  data() {
    return {
      childSlug: this.$route.params.childSlug
    };
  },
  created() {
    console.debug(`childSlug - ${this.childSlug}`);
    console.debug("CategoryPage is created.");
  },
  mounted() {
    console.debug("CategoryPage is mounted.");
  },
  updated() {
    console.debug("CategoryPage is updated.");
  }
};
</script>
