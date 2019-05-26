<template>
  <div class="uk-margin-large uk-text-center">
    <NextArticlesLoadButton :hidden="state.disabled || state.loading" v-on:execute="_load"/>
    <Loading v-show="!state.disabled && state.loading"/>
  </div>
</template>

<script>
import NextArticlesLoadButton from "./NextArticlesLoadButton.vue";
import Loading from "./Loading.vue";

export default {
  name: "NextArticlesLoad",
  components: {
    NextArticlesLoadButton,
    Loading
  },
  props: ["state"],
  methods: {
    _load: function() {
      console.debug("NextArticlesLoad._load");
      this.$emit("load");
    }
  },
  created() {
    console.debug("NextArticlesLoad is created.");
  },
  mounted() {
    console.debug("NextArticlesLoad is mounted.");
  },
  updated() {
    console.debug("NextArticlesLoad is updated.");
  }
};
</script>
