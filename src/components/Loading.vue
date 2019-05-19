<template>
  <div>
    <span uk-spinner="ratio: 3" :class="[{'uk-hidden': hidden}]"></span>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: ["hidden"],
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
