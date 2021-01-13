import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import { author } from "@/utils/Const";
import { updateRoutes } from "@/router/index";
Vue.use(Vuex);

const myState = {
  user: {
    name: "zhu",
    address: "阿尔山"
  },
  homeworks: [],
  homework: {},
  exception: { message: null },
  name: null,
  isLogin: false,
  teacher: null,
  courses: null
};

const myMutations = {
  [types.UPDATE_USER](state, data) {
    state.user = data;
  },
  [types.LIST_HOMEWORKS](state, data) {
    state.homeworks = data;
  },
  /*[types.GET_HOMEWORK](state, data) {
    state.homework = data;
  }*/
  [types.GET_EXCEPTION](state, data) {
    console.log(data);
    state.exception = data;
  },
  [types.LOGIN](state, data) {
    state.isLogin = data;
  },
  [types.INDEX](state, data) {
    state.name = data;
  },
  teacher(state, data) {
    state.teacher = data;
  },
  courses(state, data) {
    state.courses = data;
  }
};

const myActios = {
  [types.UPDATE_USER]({ commit }, data) {
    setTimeout(() => {
      commit(types.UPDATE_USER, data);
    }, 2000);
  },
  async [types.LIST_HOMEWORKS]({ commit }, data) {
    let resp = await axios.get("homeworks");
    commit(types.LIST_HOMEWORKS, resp.data.homeworks);
  },
  /*async [types.GET_HOMEWORK]({ commit }, data) {
    let resp = await axios.get(`/homeworks/${data.hid}`);
    commit(types.GET_HOMEWORK, resp.data.homework);
  },*/
  // 不把homework挂在根上，谁用返给谁，不占用资源
  async [types.GET_HOMEWORK]({ commit }, data) {
    let resp = await axios.get(`homeworks/${data.hid}`);
    return Promise.resolve(resp.data.homework);
  },
  async [types.LOGIN]({ commit }, data) {
    let resp = await axios.post("login", data);
    let auth = resp.headers[author];
    if (auth != null) {
      sessionStorage.setItem(author, auth);
      sessionStorage.setItem("role", resp.data.role);
      updateRoutes();
      commit(types.LOGIN, true);
    }
  },
  async [types.INDEX]({ commit }, data) {
    let resp = await axios.get("index");
    commit(types.INDEX, resp.data.name);
  },
  async backendindex({ commit }, data) {
    let resp = await axios.get("teacher/index");
    commit("teacher", resp.data.teacher);
    commit("courses", resp.data.courses);
  },
  async addCourse({ commit }, data) {
    let resp = await axios.post("teacher/courses", data);
  }
};
export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActios,
  modules: {}
});

if (sessionStorage.getItem(author) != null) {
  myState.isLogin = true;
}
