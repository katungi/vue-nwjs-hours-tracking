import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HoursLog.vue';
import Projects from '../views/Projects.vue';
import TimeEntry from '../views/TimeEntry.vue';


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
  },
  {
    path: '/add-time-entry',
    name: 'TimeEntry',
    component: TimeEntry
  }
];

const router = new VueRouter({
  routes
});

export default router;
