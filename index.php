<!DOCTYPE html> 
<title> 
はじめてのVue.js
</title> 
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<div id="app">
    <post></post>
</div>
<script> 
Vue.component('post',{
    template: '<div>this is a post.</div>'
})
new Vue({
    el: '#app'
})
</script>