import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout';

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Layout',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'HelloWord',
                    component: () => import('@/components/helloWorld')
                }
            ]
        }
    ]
})
