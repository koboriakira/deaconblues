<template>
  <div>
    <TagPosts :tagId="tagId"/>
    <hr class="uk-divider-icon">
    <TagPostList :tagId="tagId"/>
  </div>
</template>

<script>
import TagPosts from "./TagPosts.vue";
import TagPostList from "./TagPostList.vue";

export default {
  name: "TagPage",
  components: {
    TagPosts,
    TagPostList
  },
  data() {
    return {
      tagId: this.$route.params.tagId
    };
  },
  created() {
    console.debug(`tagId - ${this.tagId}`);
    console.debug("TagPage is created.");
  },
  mounted() {
    console.debug("TagPage is mounted.");
  },
  updated() {
    console.debug("TagPage is updated.");
  }
};
</script>
