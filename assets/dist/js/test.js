var router = new VueRouter({
    routes: [
        {
            path: 'top',
            component: {
                template: "<p>トップページです。</p>"
            }
        },
        {
            path: 'posts',
            component: {
                template: "<p>記事ダミーです。</p>"
            }
        }
    ]
})

var vm = new Vue({
    router: router,
    data: {
        title: "",
        message: "Loading...."
    },
    mounted: function() {
        setTimeout(() => {
            axios.get("http://localhost:8080/wp-json/wp/v2/posts")
                .then(response => {
                    console.log(response.data[0]);
                    this.title = response.data[0].title.rendered;
                    this.message = response.data[0].content.rendered});
        }, 1000)
    }
})
vm.$mount('#app');