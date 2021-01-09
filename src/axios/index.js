import axios from "axios";
import store from "@/store/index";
import { GET_EXCEPTION } from "@/store/types";
axios.defaults.baseURL = "/api/";

axios.interceptors.request.use(
  req => {
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
    return Promise.resolve();
  }
);
export default axios;
