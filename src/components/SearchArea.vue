<template>
  <div>
    <form class="uk-search uk-search-default" @submit.prevent="search">
      <a href uk-search-icon v-on:click="search"></a>
      <!-- <router-link :to="{name: 'Search', params: { word: searchWord }}" class="uk-search-icon"></router-link> -->
      <input
        class="uk-search-input"
        v-on:keyup="test"
        v-model="searchWord"
        type="search"
        placeholder="Search..."
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchArea",
  data() {
    return {
      searchWord: ""
    };
  },
  methods: {
    test() {
      console.info(this.searchWord);
    },
    search() {
      this.$router.push({ name: "Search", params: { word: this.searchWord } });
    }
  },
  created() {
    console.debug("SearchArea is created.");
  },
  mounted() {
    console.debug("SearchArea is mounted.");
  },
  updated() {
    console.debug("SearchArea is updated.");
  }
};
</script>
