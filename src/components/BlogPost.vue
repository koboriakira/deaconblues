<template>
  <div class="uk-margin-large-top uk-margin-xlarge-bottom">
    <article
      :id="'blog' + post.id"
      class="uk-article uk-width-1-1 uk-box-shadow-small uk-padding-large"
    >
      <PostTitle :title="post.title" :id="post.id"/>
      <PostMetaInfo :category="post.category" :date="post.date" :tags="post.tags"/>
      <PostContent :content="post.content" :visible="isSingle || !isFolded"/>
      <PostExcerpt :content="post.excerpt" :visible="!isSingle && isFolded"/>
      <PostFoldingButton v-on:fold="_fold" v-if="!isSingle" :postId="post.id"/>
    </article>
  </div>
</template>

<script>
import PostTitle from "./PostTitle.vue";
import PostContent from "./PostContent.vue";
import PostMetaInfo from "./PostMetaInfo.vue";
import PostExcerpt from "./PostExcerpt.vue";
import PostFoldingButton from "./PostFoldingButton.vue";

export default {
  name: "BlogPost",
  props: ["post", "isSingle"],
  data() {
    return {
      isFolded: true
    };
  },
  components: {
    PostTitle,
    PostContent,
    PostMetaInfo,
    PostExcerpt,
    PostFoldingButton
  },
  methods: {
    _fold: function() {
      console.debug("BlogPost._fold");
      this.isFolded = !this.isFolded;
    }
  },
  created() {
    console.debug("BlogPost is created.");
  },
  mounted() {
    console.debug("BlogPost is mounted.");
  },
  updated() {
    console.debug("BlogPost is updated.");
  }
};
</script>

<style scoped>
@media (max-width: 960px) {
  .uk-padding-large {
    padding-top: 1rem !important;
    padding-bottom: 2rem !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .uk-margin-large-top {
    margin-top: 1rem !important;
  }
  .uk-margin-xlarge-bottom {
    margin-bottom: 1rem !important;
  }
}
</style>
