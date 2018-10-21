<!DOCTYPE html> 
<title> 
はじめて の Vue. js
</title> 
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<div id="app">
    {{message}}
</div>
<script> 
  console.log(typeof Vue !== 'undefined');
  new Vue({
      el: '#app',
      data: {
          message: 'Hello!'
      }
  });
</script>
