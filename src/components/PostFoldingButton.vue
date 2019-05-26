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
      txt: "全文を読む",
      isFold: true
    };
  },
  methods: {
    _execute: function() {
      console.log("PostFoldingButton.execute");
      this.$emit("fold");
      this.isFold = !this.isFold;
      this.txt = this.isFold ? "全文を読む" : "折りたたむ";
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
