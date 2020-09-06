import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Services from '../views/Services.vue';
import Stores from '../views/Stores.vue';
import Reviews from '../views/Reviews.vue';
import Videos from '../views/Videos.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
    props: true,
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
    props: true,
  },
  {
    path: '/stores',
    name: 'Stores',
    component: Stores,
    props: true,
  },
  {
    path: '/reviews',
    name: 'Review',
    component: Reviews,
    props: true,
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos,
    props: true,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
