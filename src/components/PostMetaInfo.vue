<template>
  <div
    class="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom uk-text-right uk-article-title uk-text-meta"
  >
    <span uk-icon="tag"></span>&nbsp;
    <div v-for="tag in tags" :key="tag.id" :tag="tag" style="display: inline-block;">
      <span style="display: inline-block;">
        <router-link :to="{name: 'Tag', params: { id: tag.id }}">{{ tag.name }}</router-link>
      </span>
      <span v-if="!isLast(tag, tags)">,&nbsp;</span>
    </div>
    <div style="display: inline-block">
      <span>&nbsp;&nbsp;</span>
      <router-link :to="{name: 'Category', params: { first: category.slug }}">
        <span uk-icon="folder"></span>
        &nbsp;{{ category.name }}
      </router-link>
    </div>
    <div style="display: inline-block">
      <span>&nbsp;&nbsp;</span>
      <span uk-icon="clock"></span>
      &nbsp;{{ date }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PostMetaInfo",
  props: ["category", "date", "tags"],
  methods: {
    isLast(tag, tags) {
      console.debug(`isLast`);
      return tags.slice(-1)[0].id === tag.id;
    }
  }
};
</script>
