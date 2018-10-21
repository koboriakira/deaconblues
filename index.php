<!DOCTYPE html> 
<title> 
はじめてのVue.js
</title> 
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/dist/js/test.js"></script>
<div id="app">
    <post></post>
</div>
<script> 
new Vue({
    el: '#app'
})
</script>