<template>
  <div class="uk-margin-large-top uk-padding-small uk-background-muted">
    <div>
      <span uk-icon="icon: tag; ratio: 2"></span>
    </div>
    <div>
      <span uk-spinner="ratio: 2" v-if="tags.length === 0"></span>
    </div>
    <ul
      style="display: inline-block;"
      class="uk-subnav uk-subnav-divider"
      uk-margin
      v-for="tag in tags"
      :key="tag.id"
    >
      <li>
        <a href="#scrolltop" v-on:click="_link(tag.id)" uk-scroll="duration:300;">{{ tag.name }}</a>
        <!-- <router-link :to="{name: 'Tag', params: { tagId: tag.id }}">{{ tag.name }}</router-link> -->
        <span v-if="!isLast(tag, tags)">&nbsp;|&nbsp;</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Tags from "@/assets/common/js/singleton/tags";

export default {
  name: "TagList",
  data() {
    return {
      tags: []
    };
  },
  methods: {
    getTagList: async function() {
      this.tags = await Tags.init();
      console.dir(this.tags);
    },
    isLast: function(tag, tags) {
      return tags.slice(-1)[0].id === tag.id;
    },
    _link: function(tagId) {
      console.info(`tagId>>>>${tagId}`);
      this.$router.push({ name: "Tag", params: { tagId: tagId } });
    }
  },
  created() {
    this.getTagList();
    console.debug("TagList is created.");
  },
  mounted() {
    console.debug("TagList is mounted.");
  },
  updated() {
    console.debug("TagList is updated.");
  }
};
</script>
