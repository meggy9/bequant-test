import Vue from "vue"
import VueRouter from "vue-router"

import Exchanges from './components/Exchanges'
import Exchange from './components/Exchange'
import Markets from './components/Markets'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/exchanges'
    },
    {
        path: '/exchanges',
        component: Exchanges
    },
    {
        path: '/exchanges/:id',
        component: Exchange
    },
    {
        path: '/markets',
        component: Markets
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router