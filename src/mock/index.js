import { author } from "@/utils/Const";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);
function path(p) {
  let reg = p.replace(/{\w+}/g, "(\\w+)").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}
mock.onGet(path("users/{uid}")).reply(200, {
  user: {
    userName: "chao",
    userId: 1
  }
});
mock.onGet(path("students/{tid}/homeworks/{hid}")).reply(200, {
  user: {
    userName: "qi",
    userId: 2
  }
});
mock.onPost("login").reply(c => {
  let data = c.data;
  let user = JSON.parse(data);
  let result = [401, { message: "用户名密码错误" }];
  if (user.number == "1001" && user.password == "123456") {
    result = [
      200,
      {
        role: "abcccccccccccccccccccccc"
      },
      {
        authorization: "65a1c6a5ca65c1a65a1c6a5ca65c1a65a1c6a5ca65c1a"
      }
    ];
  }
  console.log(result);
  return result;
});
mock.onGet(path("homeworks")).reply(200, {
  homeworks: [
    { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" },
    { id: 2, name: "Java封装", deadline: "2019-05-10T12:00" },
    { id: 3, name: "Java泛型", deadline: "2019-06-10T21:30" }
  ]
});
mock.onGet(path("homeworks/{hid}")).reply(c => {
  let reg = /homeworks\/(\d+)/;
  let hid = c.url.match(reg)[1];
  return [200, { homework: homeworks.find(h => h.id == hid) }];
});
mock.onGet("index").reply(c => {
  let result = [403, { message: "无权限" }];
  console.log(c);
  let auth = c.headers[author];
  console.log(auth);
  if (auth == "65a1c6a5ca65c1a65a1c6a5ca65c1a65a1c6a5ca65c1a") {
    result = [200, { name: "chao" }];
  }
  return result;
});
const homeworks = [
  { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" },
  { id: 2, name: "Java封装", deadline: "2019-05-10T12:00" },
  { id: 3, name: "Java泛型", deadline: "2019-06-10T21:30" }
];
