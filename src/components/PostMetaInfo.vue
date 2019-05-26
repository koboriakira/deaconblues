<template>
  <div
    class="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom uk-text-right uk-article-title uk-text-meta"
  >
    <div v-if="exists(tags)" style="display: inline-block;">
      <span uk-icon="tag"></span>&nbsp;
    </div>
    <div v-for="tag in tags" :key="tag.id" :tag="tag" style="display: inline-block;">
      <span style="display: inline-block;">
        <router-link :to="{name: 'Tag', params: { tagId: tag.id }}">{{ tag.name }}</router-link>
      </span>
      <span v-if="!isLast(tag, tags)">,&nbsp;</span>
    </div>
    <div style="display: inline-block">
      <span>&nbsp;&nbsp;</span>
      <span uk-icon="folder"></span>&nbsp;
      <router-link :to="{name: 'Category', params: { childSlug: category.slug }}">
        <span>{{ category.name }}</span>
        <!-- <span class="uk-label">{{ category.name }}</span> -->
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
      // console.debug(`isLast`);
      return tags.slice(-1)[0].id === tag.id;
    },
    exists(tags) {
      console.dir(tags);
      if (tags === undefined || tags === null) {
        return false;
      }
      return tags.length > 0;
    }
  }
};
</script>
