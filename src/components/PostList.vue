<template>
  <div>
    <div>
      <span uk-spinner="ratio: 3" v-if="posts.length === 0"></span>
    </div>
    <div style="text-align:left">
      <h2 v-if="posts.length > 0">{{filterName}}の記事一覧</h2>
      <ul v-for="post in posts" :key="post.id" class="uk-list uk-list-bullet">
        <li>
          <router-link :to="{name: 'Post', params: { postId: post.id }}" v-html="post.title"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ["posts", "filterName"],
  created() {
    console.debug("PostList is created.");
  },
  mounted() {
    console.debug("PostList is mounted.");
  },
  updated() {
    console.info(`PostList: ${this.posts}`);
    console.debug("PostList is updated.");
  }
};
</script>
