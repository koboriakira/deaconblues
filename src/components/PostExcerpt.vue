<template>
  <div
    v-show="visible"
    v-html="content"
    class="uk-padding-small"
    style="line-height: 1.9rem; text-align: left;"
  ></div>
</template>

<script>
export default {
  name: "PostExcerpt",
  props: ["content", "visible"],
  created() {
    console.debug("PostContent is created.");
  },
  mounted() {
    console.debug("PostContent is mounted.");
  },
  updated() {
    console.debug("PostContent is updated.");
  }
};
</script>
