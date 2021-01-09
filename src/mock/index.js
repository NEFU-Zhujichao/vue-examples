import axios from "axios";
import MockAdapter from "axios-mock-adapter";

let mock = new MockAdapter(axios);

mock.onGet(path("users/{uid}")).reply(200, {
  user: {
    userName: "chao",
    userId: 1
  }
});
mock.onGet(path("student/{tid}/homeworks/{hid}")).reply(200, {
  user: {
    userName: "qi",
    userId: 2
  }
});
mock.onPost("login").reply(c => {
  console.log(c);
  let data = c.data;
  let user = JSON.parse(data);
  let result = [401, { message: "用户名密码错误" }];
  if (user.number == "1001" && user.password == "123456") {
    result = [
      200,
      {
        user: { userName: "BO", userId: 3 }
      },
      {
        Authorization: "65a1c6a5ca65c1a65a1c6a5ca65c1a65a1c6a5ca65c1a"
      }
    ];
  }
  return result;
});
mock.onGet(path("homeworks")).reply(200, {
  homeworks: [
    { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" },
    { id: 2, name: "Java封装", deadline: "2019-05-10T12:00" },
    { id: 3, name: "Java泛型", deadline: "2019-06-10T21:30" }
  ]
});
mock.onGet(path("homeworks/{hid}")).reply(200, {
  homework: { id: 1, name: "Java基本数据类型", deadline: "2019-04-10T09:00" }
});

function path(p) {
  let reg = p.replace(/{\w+}/g, "\\w+").replace("///g", "\\/") + "$";
  return new RegExp(reg);
}
