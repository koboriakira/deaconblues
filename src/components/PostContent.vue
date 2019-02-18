<template>
  <div v-html="content" class="uk-padding-small" style="line-height: 1.9rem;"></div>
</template>

<script>
export default {
  name: "PostContent",
  props: ["content"]
};
</script>
