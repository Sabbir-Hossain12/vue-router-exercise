import {createRouter,createWebHistory } from 'vue-router'
import home from '@/pages/Home.vue'
import about from '@/pages/About.vue'
import contact from '@/pages/Contact.vue'
import test from '@/pages/test.vue'


const routes = [
    {
        path: '/',
        component: home,
        name: 'Home'
    },
    {
        path: '/about',
        component: about,
        name: 'About'
    },
    {
        path: '/contact/:category?',
        //optional params
        name: 'Contact',
        components:{
            default:contact,
            test:test
        }
    },
];

export default createRouter({
    history: createWebHistory(),
    routes
})

