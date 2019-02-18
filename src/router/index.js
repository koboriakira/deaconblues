import Vue from 'vue'
import Router from 'vue-router'
import DefaultPosts from '../components/DefaultPosts'

Vue.use(Router)

export default new Router({
  mode: 'history', // URLの末尾にハッシュを入れない設定。副作用は未調査。
  routes: [{
    path: '/',
    component: DefaultPosts
  }]
})
