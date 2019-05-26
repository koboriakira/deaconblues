<template>
  <div>
    <div id="scrolltop"></div>
    <MyHeader/>
    <router-view class="uk-margin-auto" style="max-width: 750px"></router-view>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from "./MyHeader.vue";
import MyFooter from "./MyFooter.vue";

export default {
  name: "DeaconBlues",
  components: {
    MyHeader,
    MyFooter
  }
};
</script>

<!--
<style src="../../node_modules/uikit/dist/css/uikit.min.css"></style>
-->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
