import Layout from '@/layout'

const BlogsRouter = {
    path: '/blog',
    component: Layout,
    redirect: '/blog/list',
    name: 'Blog',
    meta: {
      title: 'Blog',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/views/blog/create'),
        name: 'CreateArticle',
        meta: { title: 'Create Article', icon: 'edit' }
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/blog/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/blog/list' },
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/views/blog/list'),
        name: 'ArticleList',
        meta: { title: 'Article List', icon: 'list' }
      }
    ]
  }

  export default BlogsRouter
