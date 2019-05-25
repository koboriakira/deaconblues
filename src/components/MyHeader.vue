<template>
  <header class="uk-tile uk-tile-primary uk-margin">
    <h1 class="uk-text-center">
      <router-link to="/" :class="['uk-link-heading']">コボリアキラの要約と反復</router-link>
    </h1>
    <SearchArea/>
  </header>
</template>

<script>
import SearchArea from "./SearchArea.vue";
export default {
  name: "MyHeader",
  components: {
    SearchArea
  }
};
</script>




<style lang="less" scoped>
</style>
