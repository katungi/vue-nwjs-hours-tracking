import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HoursLog.vue';
import Projects from '../views/Projects.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
];

const router = new VueRouter({
  routes
});

export default router;
