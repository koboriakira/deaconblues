<template>
  <div>
    <button class="uk-button uk-button-secondary" v-on:click="_execute">{{txt}}</button>
  </div>
</template>

<script>
export default {
  name: "PostFoldingButton",
  data() {
    return {
      txt: "全文を読む"
    };
  },
  methods: {
    _execute: function() {
      console.log("PostFoldingButton.execute");
      this.$emit("fold");
      this.txt = "折りたたむ";
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
