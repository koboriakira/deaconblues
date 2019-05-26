import Vue from 'vue'
import Router from 'vue-router'
import DefaultPosts from '../components/DefaultPosts'
import SearchPosts from '../components/SearchPosts'
import CategoryPage from '../components/CategoryPage'
import TagPage from '../components/TagPage'
import SinglePost from '../components/SinglePost'

Vue.use(Router)

export default new Router({
  mode: 'history', // URLの末尾にハッシュを入れない設定。副作用は未調査。
  routes: [{
      path: '/',
      component: DefaultPosts
    },
    {
      path: '/category/:childSlug',
      name: 'Category',
      component: CategoryPage,
    },
    {
      path: '/tag/:tagId',
      name: 'Tag',
      component: TagPage,
    },
    {
      path: '/post/:postId',
      name: 'Post',
      component: SinglePost
    },
    {
      path: '/:year/:month/:day/:postId',
      name: 'PreVersionPost',
      component: SinglePost
    },
    {
      path: '/search/:word',
      name: 'Search',
      component: SearchPosts
    }
  ]
})
