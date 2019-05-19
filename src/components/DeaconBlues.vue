<template>
  <div>
    <MyHeader/>
    <router-view></router-view>
    <MyFooter>Copyright by kobori akira</MyFooter>
  </div>
</template>

<script>
import MyHeader from "./MyHeader.vue";
import MyFooter from "./MyFooter.vue";
import Categories from "@/assets/common/js/singleton/categories";
import Tags from "@/assets/common/js/singleton/tags";

export default {
  name: "DeaconBlues",
  components: {
    MyHeader,
    MyFooter
  },
  created() {
    // Categories.init();
    // Tags.init();
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
