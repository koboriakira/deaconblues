<template>
  <div class="uk-margin-auto" style="max-width: 680px">
    <article class="uk-article uk-width-1-1">
      <PostTitle :title="post.title" :id="post.id"/>
      <PostMetaInfo :category="post.category" :date="post.date" :tags="post.tags"/>
      <PostContent :content="post.content"/>
    </article>
  </div>
</template>

<script>
import PostTitle from "./PostTitle.vue";
import PostContent from "./PostContent.vue";
import PostMetaInfo from "./PostMetaInfo.vue";

export default {
  name: "BlogPost",
  props: ["post"],
  components: {
    PostTitle,
    PostContent,
    PostMetaInfo
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
