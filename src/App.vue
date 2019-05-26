<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <DeaconBlues/>
  </div>
</template>

<script>
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import DeaconBlues from "./components/DeaconBlues.vue";

// loads the Icon plugin
UIkit.use(Icons);

// title
document.title = "コボリアキラの要約と反復";

export default {
  name: "app",
  components: {
    DeaconBlues
  }
};
</script>

<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

blockquote {
  font-size: 100%;
}
</style>
