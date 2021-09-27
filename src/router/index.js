import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/login',
        name: 'login',
        meta: { 'title': '登录' },
        hidden: true,
        component: () => import('@/views/login/index'),
    },
    {
      path: '/',
      name: 'home',
      meta: {'title' : '主页'},
      redirect: 'lol',
      hidden: true,
      component: () => import('@/views/index'),
      children: [
          {
              path: 'lol',
              name: '英雄联盟',
              meta: { 'title' : '英雄联盟' },
              redirect: '/lol/news',
              component: () => import('@/views/lol/index'),
              children: [
                  {
                      path: 'news',
                      name: '资讯',
                      hidden: true,
                      component: () => import('@/views/lol/news/index')
                  },
                  {
                      path: 'record',
                      name: '我的战绩',
                      redirect: '/lol/record/overview',
                      hidden: true,
                      component: () => import('@/views/lol/record/index'),
                      children: [
                          {
                              path:'overview',
                              name:'战绩总览',
                              hidden: true,
                              component: () => import('@/views/lol/record/overview/index')
                          },
                          {
                              path:'historcal',
                              name:'历史战绩',
                              hidden: true,
                              component: () => import('@/views/lol/record/historical/index')
                          },
                      ]
                  },
              ]
          }
      ]
    }
  ]
})
