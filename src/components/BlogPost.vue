<template>
  <div class="uk-margin-auto" style="max-width: 680px">
    <article class="uk-article uk-width-1-1">
      <!-- <post-title v-bind:title="post.title" v-bind:id="post.id"></post-title> -->
      <!-- <post-meta-info
        v-bind:category="post.category"
        v-bind:date="post.date"
        v-bind:tags="post.tags"
      ></post-meta-info>-->
      <!-- <PostContent v-bind:content="post.content"/> -->
      post
    </article>
  </div>
</template>

<script>
import PostTitle from "./PostTitle.vue";
import PostContent from "./PostContent.vue";

export default {
  name: "BlogPost",
  props: ["post"],
  components: {
    // "post-meta-info": postMetaInfo,
    // "post-title": postTitle,
    PostTitle,
    PostContent
  }
};
</script>
