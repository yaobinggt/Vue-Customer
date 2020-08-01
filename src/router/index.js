import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import Customers from '../components/Customers'
import About from '../components/About'
import Add from '../components/Add'
import CustomerDetails from '../components/CustomerDetails'
import Edit from '../components/Edit'

Vue.use(Router)

export default new Router({
    mode: 'history',//去掉#
    base: __dirname,
    routes: [
        { path: '/', component: Customers },
        { path: '/about', component: About },
        { path: '/add', component: Add },
        { path: '/details/:id', component: CustomerDetails },
        { path: '/edit/:id', component: Edit }
    ]
})