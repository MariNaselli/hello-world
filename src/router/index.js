import Vue from 'vue';
import VueRouter from 'vue-router';

// Importa tus componentes de vista aquí
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: { name: 'Home' } // Redirecciona a la ruta 'Home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  // Agrega más rutas según necesites
];

const router = new VueRouter({
  mode: 'history', // Agrega esta línea para activar el modo de enrutamiento basado en historial
  routes
});

export default router;
