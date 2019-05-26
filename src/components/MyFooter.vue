<template>
  <footer>
    <TagList/>
    <Copyright/>
  </footer>
</template>

<script>
import TagList from "./TagList.vue";
import Copyright from "./Copyright.vue";

export default {
  name: "MyFooter",
  components: { TagList, Copyright },
  created() {
    console.debug("MyFooter is created.");
  },
  mounted() {
    console.debug("MyFooter is mounted.");
  },
  updated() {
    console.debug("MyFooter is updated.");
  }
};
</script>
