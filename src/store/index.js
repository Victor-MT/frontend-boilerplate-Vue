import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: null,
    token: null,
  },
  getters: {
    user: (state) => {
      return state.user;
    }
  },
  mutations: {
    SET_AUTHENTICATION(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    login({ commit }, { user, token }) {
      commit('SET_AUTHENTICATION', true);
      commit('SET_USER', user);
      commit('SET_TOKEN', token);
      // Salve o token no local storage para persistência
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout({ commit }) {
      commit('LOGOUT');
      // Limpe o token do local storage ao fazer logout
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    checkAuthentication({ commit }) {
      // Verifique se o token está presente no local storage ao carregar a aplicação
      const token = localStorage.getItem('token');
      if (token) {
        // Execute uma verificação adicional, se necessário, para validar o token
        // e obter as informações do usuário
        const user = {} //getUserFromToken(token);
        if (user) {
          commit('SET_AUTHENTICATION', true);
          commit('SET_USER', user);
          commit('SET_TOKEN', token);
        }
      }
    },
  }
})
