<!DOCTYPE html>
<head>
<title>はじめてのVue.js</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.js"></script>

<!-- axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<!-- stylesheet -->
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/common/css/uikit.min.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/common/css/style.css">

</head>
<body>
<div id="app">
    <header>
        <h1 class="uk-text-center uk-tile uk-tile-primary"><a href="<?php echo home_url(); ?>">コボリアキラの要約と反復</a></h1>
    </header>
    <div class="uk-margin-auto" style="max-width: 800px">
        <li v-for="post in posts" v-bind:key="post.title.rendered" class="uk-list">
            <article class="uk-article uk-width-1-1">
                <h1 class="uk-heading-divider uk-text-center" v-html="post.title.rendered"></h1>
                <div v-html="post.content.rendered" class="uk-padding-small" style="line-height: 1.8rem;"></div>
            </article>
        </li>
        <div class="uk-text-center">
            <button
                class="uk-button"
                :class="[{
                    'uk-button-default': loading,
                    'uk-button-primary': !loading,
                    'is-disabled': disabled
                    }]"
                :disabled="disabled"
                v-show="visible"
                @click="load"
            >{{ textOfLinktNextPost }}</button>
            <span uk-spinner="ratio: 4.5"></span>
        <div>
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
            visible: true,
            textOfLinktNextPost: '次の記事を読む'
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

            var URL = `http://koboriakira.com/wp-json/wp/v2/posts?page=${this.page}&per_page=1`;
            if (array.length == 7) {
                var postId = array.slice(-1)[0];
                URL = `http://koboriakira.com/wp-json/wp/v2/posts/${postId}`;
                this.visible = false;
            }
            (async () => {
                try {
                    const res = await axios.get(URL);
                    this.posts = this.posts.concat(res.data);
                    this.loading = false;
                    this.textOfLinktNextPost = 'Next post';
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
            this.textOfLinktNextPost = 'Now Loading...';
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
