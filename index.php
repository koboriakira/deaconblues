<!DOCTYPE html> 
<head>
<title> 
はじめてのVue.js
</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
</head>
<body>
<div id="app">
    <p>コボリアキラの要約と反復</p>
    <li v-for="post in posts" v-bind:key="post.title.rendered">
        <h1><span v-html="post.title.rendered"></span></h1>
        <div>
            <span v-html="post.content.rendered"></span>
        </div>
    </li>
    <button
      class="button is-primary"
      :class="[{
        'is-loading': loading,
        'is-desabled': disabled
      }]"
      :disabled="disabled"
      @click="load"
    >load more</button>
</div>
</body>
<script>
var vm = new Vue({
    // router: router,
    data: function() {
        return {
            posts: [],
            page: 0,
            loading: false,
            disabled: false
        }
    },
    mounted: function() {
        this.load();
    },
    watch: {
        page() {
            const URL = `http://localhost:8080/wp-json/wp/v2/posts?page=${this.page}&per_page=1`;
            (async () => {
                try {
                    const res = await axios.get(URL);
                    this.posts = this.posts.concat(res.data);
                    this.loading = false;
                } catch (e) {
                    console.log(e);
                    this.empty();
                }
            })();
        }
    },
    methods: {
        load() {
            this.loading = true;
            this.page++;
        },
        empty() {
            this.loading = false;
            this.disabled = true;
        }
    }
})
vm.$mount('#app');
</script>
</html>