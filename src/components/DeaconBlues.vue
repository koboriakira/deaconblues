<template>
  <div>
    <Header/>
    <router-view></router-view>
    <Footer>Copyright by kobori akira</Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Categories from "@/assets/common/js/categories";
import Tags from "@/assets/common/js/tags";

export default {
  name: "DeaconBlues",
  components: {
    Header
  },
  created() {
    Categories.init();
    Tags.init();
  }
};
</script>

<style src="../../node_modules/uikit/dist/css/uikit.min.css"></style>

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
