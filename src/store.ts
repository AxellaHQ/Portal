import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    signedIn: false,
    name: "",
    password: "",
  },
  mutations: {
    login(state, payload) {
      state.signedIn = true;
      state.name = payload.name;
      state.password = payload.password;
    },
    logout(state) {
      state.signedIn = false;
      state.name = state.password = "";
    }
  },
  actions: {
    login(state, payload: { name: string, password: string }) {
      state.commit("login", payload);
    },
    logout(state) { state.commit("logout"); },
  },
});
