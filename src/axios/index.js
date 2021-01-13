import axios from "axios";
import store from "@/store/index";
import { GET_EXCEPTION } from "@/store/types";
import { author } from "@/utils/Const";

axios.defaults.baseURL = "/api/";

axios.interceptors.request.use(
  req => {
    let auth = sessionStorage.getItem(author);
    if (auth != null) {
      req.headers[author] = auth;
    }
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  resp => {
    return resp;
  },
  error => {
    let resp = error.response;
    if (resp) {
      switch (resp.status) {
        case 401:
          break;
      }
      store.commit(GET_EXCEPTION, { message: resp.data.message });
    }
    return Promise.reject();
  }
);
export default axios;
