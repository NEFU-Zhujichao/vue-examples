<template>
  <div>
    <div>
      <p>{{ msg }}</p>
    </div>
    <p v-if="user.level == 'admin'">以下内容仅管理员可见</p>
    <template v-if="userNameLogin">
      <input type="text" placeholder="请输入账号" key="key1" />
      <input type="password" placeholder="请输入密码" />
    </template>
    <template v-else>
      <input type="text" placeholder="请输入名字" key="key2" />
    </template>
    <br />
    <button @click="changeLevel">转换</button>
  </div>
</template>
<script>
export default {
  data: () => ({
    msg: "HelloVue",
    admin: true,
    userNameLogin: true,
    user: { name: "zhu", level: "admin" }
  }),
  methods: {
    changeLevel() {
      this.userNameLogin = !this.userNameLogin;
    }
  }
};
</script>
