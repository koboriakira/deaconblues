<template>
  <div>
    <router-link :to="{name: 'Post', params: { postid: id }}">
      <h1 class="uk-heading-divider uk-text-center">{{ title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PostTitle",
  props: ["title", "id"]
};
</script>
