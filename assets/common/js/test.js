var vm = new Vue({
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