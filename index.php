<!DOCTYPE html>
<head>
<title>はじめてのVue.js</title>
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.js"></script>

<!-- axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<!-- uikit -->
<script src="<?php echo get_template_directory_uri(); ?>/assets/common/js/uikit.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/common/js/uikit-icons.min.js"></script>

<!-- original -->
<script src="<?php echo get_template_directory_uri(); ?>/assets/dist/js/categories.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/dist/js/wprestapi.js"></script>

<!-- stylesheet -->
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/common/css/uikit.min.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/common/css/style.css">

</head>
<body>
<div id="app">
    <header>
        <h1 class="uk-text-center uk-tile uk-tile-primary"><a href="<?php echo home_url(); ?>">コボリアキラの要約と反復</a></h1>
    </header>
    <div class="uk-margin-auto" style="max-width: 680px">
        <li v-for="post in posts" v-bind:key="post.title" class="uk-list">
            <article class="uk-article uk-width-1-1">
                <h1 class="uk-heading-divider uk-text-center" v-html="post.title"></h1>
                <div class="uk-text-right uk-article-title uk-text-meta">
                    <a v-bind:href="post.category.link">
                        <span uk-icon="folder"></span>{{ post.category.name }}
                    </a>
                    <span>&nbsp;</span>
                    <span uk-icon="clock"></span>
                    {{ post.date }}
                </div>
                <div v-html="post.content" class="uk-padding-small" style="line-height: 1.8rem;"></div>
            </article>
        </li>
        <div class="uk-text-center">
            <button
                class="uk-button"
                :class="[{
                    'uk-button-primary': !loading,
                    'uk-hidden': disabled || loading
                    }]"
                :disabled="disabled"
                v-show="visible"
                @click="load"
            >{{ textOfLinktNextPost }}</button>
            <span
                uk-spinner="ratio: 3"
                :class="[{
                    'uk-hidden': disabled || !loading
                    }]"
            ></span>
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
            textOfLinktNextPost: ''
        }
    },
    mounted: function() {
        this.load();
    },
    watch: {
        page() {
            getPosts(this.page)
                .then(data => {
                    console.debug(data);
                    this.posts = this.posts.concat(data);
                    this.loading = false;
                    this.textOfLinktNextPost = `次の${PER_PAGE}件を読む`;
                }, error => {
                    console.warn(error);
                    this.empty();
                })
        }
    },
    methods: {
        load() {
            this.loading = true;
            this.textOfLinktNextPost = '';
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
