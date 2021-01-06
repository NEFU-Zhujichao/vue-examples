import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
Vue.use(Vuex);

const myState = {
  user: {
    name: "zhu",
    address: "阿尔山"
  }
};

const myMutations = {
  [types.UPDATE_USER](state, data) {
    state.user = data;
  }
};

const myActios = {
  [types.UPDATE_USER]({ commit }, data) {
    setTimeout(() => {
      commit(types.UPDATE_USER, data);
    }, 2000);
  }
};

export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActios,
  modules: {}
});
