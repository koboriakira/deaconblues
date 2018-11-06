<!DOCTYPE html> 
<head>
<title>はじめてのVue.js</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.js"></script>

<!-- axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<!-- BULMA -->
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/common/css/style.css">

</head>
<body>
<div id="app">
    <h1 style="margin: 1em; text-align:center;"><a href="<?php echo home_url(); ?>">コボリアキラの要約と反復</a></h1>
    <li v-for="post in posts" v-bind:key="post.title.rendered">
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title" v-html="post.title.rendered" style="font-size: 1.5em;"></h1>
                </div>
            </div>
        </section>
        <section class="section article">
            <div class="container">
                <div v-html="post.content.rendered"></div>
            </div>
        </section>
    </li>
    <div style="text-align:center;">
        <button
            class="button is-info is-medium"
            :class="[{
                'is-loading': loading,
                'is-desabled': disabled
                }]"
            :disabled="disabled"
            v-show="visible"
            @click="load"
        >次の記事を読む</button>
    </div>
    <footer class="footer" style="margin-top: 1em;">
        <div class="content" style="text-align:center;">
            <p>Copyright kobori akira</p>
        </div>
    </footer>
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
            disabled: false,
            visible: true
        }
    },
    mounted: function() {
        this.load();
    },
    watch: {
        page() {
            var url = location.href;
            var array = url.split("/");
            console.log(array.length);

            var URL = `http://localhost:8080/wp-json/wp/v2/posts?page=${this.page}&per_page=1`; 
            if (array.length == 7) {
                var postId = array.slice(-1)[0];
                URL = `http://localhost:8080/wp-json/wp/v2/posts/${postId}`;
                this.visible = false;
            }
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