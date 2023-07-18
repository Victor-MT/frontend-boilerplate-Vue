import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
]

const router = new VueRouter({
  routes
});

// Verifique a autenticação antes de cada navegação
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');
  const hasCredentials = token !=null && user != null;

  if (requiresAuth && !hasCredentials ) {
    // Se a rota requer autenticação e o usuário não está autenticado, redirecione para a página de login
    next('/');

  } else {
    if(to.path === '/'){
      store.dispatch('logout', {})
    }else{
      store.dispatch('login', { user, token })
    }
    // Caso contrário, permita a navegação
    next();
  }
});

export default router
