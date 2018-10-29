<!DOCTYPE html> 
<title> 
はじめてのVue.js
</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<div id="app">
    <h1><span v-html="title"></span></h1>
    <div v-html="message"></div>
</div>
<script src="<?php echo get_template_directory_uri(); ?>/assets/common/js/test.js"></script>