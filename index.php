<!DOCTYPE html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>コボリアキラの要約と反復</title>

<!-- Vue -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.js"></script>

<!-- axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<!-- uikit -->
<script src="<?php echo get_template_directory_uri(); ?>/assets/common/js/uikit.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/common/js/uikit-icons.min.js"></script>

<!-- original -->
<script src="<?php echo get_template_directory_uri(); ?>/assets/common/js/categories.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/assets/common/js/wprestapi.js"></script>

<!-- stylesheet -->
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/common/css/uikit.min.css">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/assets/common/css/style.css">

</head>
<body>
<div id="app">
    <header>
        <h1 class="uk-text-center uk-tile uk-tile-primary"><a href="<?php echo home_url(); ?>" class="uk-link-heading">コボリアキラの要約と反復</a></h1>
    </header>
    <div class="uk-margin-auto" style="max-width: 680px">
        <blog-post
            v-for="post in posts"
            v-bind:key="post.title"
            v-bind:post="post">
        </blog-post>
        <next-articles-load-button
            v-bind:state="buttonState"
            v-on:next="load()">
        </next-articles-load-button>
    </div>
    <footer class="footer" style="margin-top: 1em;">
        <div class="content" style="text-align:center;">
            <p>Copyright kobori akira</p>
        </div>
    </footer>
</div>
</body>
<script>

var postTitle = Vue.extend({
    name: 'post-title',
    props: ['title', 'link'],
    template: `
        <a v-bind:href="link" class="uk-link-heading"><h1 class="uk-heading-divider uk-text-center" v-html="title"></h1></a>
    `
});

var postMetaInfo = Vue.extend({
    name: 'post-meta-info',
    props: ['post'],
    template: `
        <div class="uk-padding-small uk-padding-remove-top uk-padding-remove-bottom uk-text-right uk-article-title uk-text-meta">
            <a v-bind:href="post.category.link">
                <span uk-icon="folder"></span>&nbsp;{{ post.category.name }}
            </a>
            <span>&nbsp;&nbsp;</span>
            <span uk-icon="clock"></span>
            {{ post.date }}
        </div>
    `
});

var postContent = Vue.extend({
    name: 'post-content',
    props: ['content'],
    template: `<div v-html="content" class="uk-padding-small" style="line-height: 1.8rem;"></div>`
});

var blogPost = Vue.extend({
    name: 'blog-post',
    props: ['post'],
    components: {
        'post-meta-info': postMetaInfo,
        'post-title': postTitle,
        'post-content': postContent
    },
    template: `
        <article class="uk-article uk-width-1-1">
            <post-title v-bind:title="post.title" v-bind:link="post.link"></post-title>
            <post-meta-info v-bind:post="post"></post-meta-info>
            <post-content v-bind:content="post.content"></post-content>
        </article>
    `
});


var nextArticlesLoadButton = Vue.extend({
    props: ['state'],
    template: `
        <div class="uk-text-center">
            <button
                class="uk-button"
                :class="[{
                    'uk-button-primary': !state.loading,
                    'uk-hidden': state.disabled || state.loading
                    }]"
                v-on:click="clickButton"
            >{{ state.text }}</button>
            <span
                uk-spinner="ratio: 3"
                :class="[{
                    'uk-hidden': state.disabled || !state.loading
                    }]"
            ></span>
        <div>
    `,
    methods: {
        clickButton: function() {
            this.$emit('next');
        }
    }
});

new Vue({
    el: '#app',
    components: {
        'blog-post': blogPost,
        'next-articles-load-button': nextArticlesLoadButton
    },
    // router: router,
    data: function() {
        return {
            posts: [],
            page: 0,
            buttonState: {
                loading: false,
                disabled: false,
                text: ''
            }
        }
    },
    mounted: function() {
        this.load();
    },
    watch: {
        page() {
            let requestParam = createParam(this.page);
            getPosts(requestParam)
                .then(data => this.successToLoad(data), err => this.failToLoad(err));
            this.buttonState.disabled = requestParam.isSingle;
        }
    },
    methods: {
        load() {
            this.buttonState.loading = true;
            this.buttonState.text = '';
            this.page++;
        },
        successToLoad(data) {
            this.posts = this.posts.concat(data);
            console.debug(this.posts);
            this.buttonState.loading = false;
            this.buttonState.text = `次の${PER_PAGE}件を読む`;
        },
        failToLoad(error) {
            console.warn(error);
            this.buttonState.disabled = true;
        }
    }
});
</script>
</html>
