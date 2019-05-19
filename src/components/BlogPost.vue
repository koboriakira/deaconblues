<template>
  <div class="uk-margin-auto uk-margin-xlarge-bottom" style="max-width: 680px">
    <article class="uk-article uk-width-1-1">
      <PostTitle :title="post.title" :id="post.id"/>
      <PostMetaInfo :category="post.category" :date="post.date" :tags="post.tags"/>
      <PostContent :content="post.content" :visible="!isFolded"/>
      <PostExcerpt :content="post.excerpt" :visible="isFolded"/>
      <PostFoldingButton v-on:fold="_fold"/>
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
  props: ["post"],
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
