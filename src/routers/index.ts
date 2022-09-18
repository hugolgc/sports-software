import { createRouter, createWebHistory } from 'vue-router';
import HallsIndex from '../views/HallsIndex.vue';
import DrawsIndex from '../views/DrawsIndex.vue';
import DrawsShow from '../views/DrawsShow.vue';
import PlayersIndex from '../views/PlayersIndex.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'HallsIndex' }
    },
    {
      path: '/halls',
      name: 'HallsIndex',
      component: HallsIndex
    },
    {
      path: '/draws',
      name: 'DrawsIndex',
      component: DrawsIndex
    },
    {
      path: '/draws/:drawId',
      name: 'DrawsShow',
      component: DrawsShow
    },
    {
      path: '/players',
      name: 'PlayersIndex',
      component: PlayersIndex
    }
  ]
});
