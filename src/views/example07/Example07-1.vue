<template>
  <div>
    <h1>axios基本请求</h1>
    <p>
      基于get请求测试
      <br />
      <button @click="getUser">getUser</button>
      <br />
      匹配表达式测试
    </p>
    <button @click="getHomework">getHomework</button>
    <p>{{ user.userName }} / {{ user.userId }}</p>
    <hr />
    <p>
      post请求测试
      <br />
      <button @click="login">login</button>
    </p>
  </div>
</template>
<script>
import axios from "@/axios/index";
export default {
  data: () => ({
    user: {
      userName: null,
      userId: null
    }
  }),
  methods: {
    /* getUser() {
      axios.get("users/14").then(resp => {
        this.user = resp.data.user;
      });
    },*/
    async getUser() {
      let resp = await axios.get("users/22");
      this.user = resp.data.user;
    },
    async getHomework() {
      let resp = await axios.get("student/22/homeworks/12");
      this.user = resp.data.user;
    },
    login() {
      axios
        .post("login", {
          number: 1001,
          password: "aaaaa"
        })
        .then(resp => {
          this.user = resp.data.user;
          console.log(resp.headers["Authorization"]);
        });
    }
  }
};
</script>
