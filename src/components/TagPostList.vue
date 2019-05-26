<template>
  <div>
    <PostList :posts="posts" :filterName="filterName"/>
  </div>
</template>

<script>
import PostList from "./PostList.vue";

import fetchPostListInTag from "@/assets/common/js/posts/fetch/fetchPostListInTag";
import convertPostLink from "@/assets/common/js/posts/convert/ConvertPostLink";
import Tags from "@/assets/common/js/singleton/tags";

export default {
  name: "TagPostList",
  components: { PostList },
  props: ["tagId"],
  data() {
    return {
      posts: [],
      page: 0,
      filterName: ""
    };
  },
  methods: {
    loadNewArticles: async function() {
      console.debug("loadNewArticles");
      this.page++;
      const res = await fetchPostListInTag(this.tagId, this.page);
      this.tag = Tags.getTagFromId(this.tagId);
      this.filterName = `「${this.tag.name}」タグ`;

      this.posts = this.posts.concat(convertPostLink(res.data));
    },
    clear: function() {
      this.posts = [];
      this.page = 0;
    }
  },
  watch: {
    $route: function(to, from) {
      console.dir(to);
      console.dir(from);
      if (to.path !== from.path) {
        console.info(`to: ${to}, from:${from}`);
        this.clear();
        this.tagId = to.params.tagId;
        this.loadNewArticles();
      }
    }
  },
  created() {
    console.debug("TagPostList is created.");
    this.loadNewArticles();
  },
  mounted() {
    console.debug("TagPostList is mounted.");
  },
  updated() {
    console.debug("TagPostList is updated.");
  }
};
</script>
