import Vue from 'vue'
import Router from 'vue-router'
import DefaultPosts from '../components/DefaultPosts'
import CategoryPosts from '../components/CategoryPosts'
import TagPosts from '../components/TagPosts'
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
      component: CategoryPosts,
    },
    {
      path: '/tag/:tagId',
      name: 'Tag',
      component: TagPosts,
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
    }
  ]
})
