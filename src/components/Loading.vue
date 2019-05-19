<template>
  <div>
    <span uk-spinner="ratio: 3"></span>
  </div>
</template>

<script>
export default {
  name: "Loading",
  created() {
    console.debug("Loading is created.");
  },
  mounted() {
    console.debug("Loading is mounted.");
  },
  updated() {
    console.debug("Loading is updated.");
  }
};
</script>
