<template>
  <div>
    <a
      v-show="isFold"
      :href="'#blog'+ id"
      class="uk-button uk-button-secondary"
      v-on:click="_execute"
      uk-scroll="duration:10"
    >全文を読む</a>
    <a v-show="!isFold" class="uk-button uk-button-secondary" v-on:click="_execute">折りたたむ</a>
  </div>
</template>

<script>
export default {
  name: "PostFoldingButton",
  props: ["postId"],
  data() {
    return {
      id: this.postId,
      isFold: true
    };
  },
  methods: {
    _execute: function() {
      console.log("PostFoldingButton.execute");
      this.$emit("fold");
      this.isFold = !this.isFold;
    }
  },
  created() {
    console.debug("PostFoldingButton is created.");
  },
  mounted() {
    console.debug("PostFoldingButton is mounted.");
  },
  updated() {
    console.debug("PostFoldingButton is updated.");
  }
};
</script>
