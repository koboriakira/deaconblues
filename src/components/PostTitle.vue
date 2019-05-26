<template>
  <div>
    <router-link :to="{name: 'Post', params: { postId: id }}">
      <h1 class="uk-heading-divider uk-text-center" v-html="title"></h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostTitle",
  props: ["title", "id"]
};
</script>
