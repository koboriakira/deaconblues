<template>
  <div>
    <button
      class="uk-button uk-button-primary"
      :class="[{'uk-hidden': hidden}]"
      v-on:click="$emit('execute')"
    >次の3件を読む</button>
  </div>
</template>

<script>
export default {
  name: "NextArticlesLoadButton",
  props: ["hidden"],
  methods: {
    _execute: function() {
      console.log("NextArticlesLoadButton.execute");
      this.$emit("execute");
    }
  },
  created() {
    console.debug("NextArticlesLoadButton is created.");
  },
  mounted() {
    console.debug("NextArticlesLoadButton is mounted.");
  },
  updated() {
    console.debug("NextArticlesLoadButton is updated.");
  }
};
</script>
